const {
  BedrockRuntimeClient,
  ConverseCommand,
} = require("@aws-sdk/client-bedrock-runtime");

const modelId = process.env.BEDROCK_MODEL_ID || "amazon.nova-lite-v1:0";
const bedrock = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1",
});

// Temporary Debugging: Log the Bedrock model ID being used
console.log("AWS_REGION:", process.env.AWS_REGION);
console.log("AWS_DEFAULT_REGION:", process.env.AWS_DEFAULT_REGION);
console.log("BEDROCK_MODEL_ID:", modelId);

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Methods": "OPTIONS,POST",
  "Content-Type": "application/json",
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: corsHeaders,
    body: JSON.stringify(body),
  };
}

function readRequestBody(event) {
  if (!event.body) return {};

  const body = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;

  return typeof body === "string" ? JSON.parse(body) : body;
}

function validateLearner(learner) {
  const requiredTextFields = [
    "name",
    "goal",
    "experienceLevel",
    "weeklyLearningHours",
    "timeframe",
    "learningStyle",
  ];

  const missingFields = requiredTextFields.filter(
    (field) => !learner[field] || typeof learner[field] !== "string",
  );

  if (!Array.isArray(learner.knownSkills)) {
    missingFields.push("knownSkills (must be an array)");
  }

  return missingFields;
}

function getResponseText(bedrockResponse) {
  const content = bedrockResponse.output?.message?.content || [];
  return content
    .filter((part) => part.text)
    .map((part) => part.text)
    .join("")
    .trim();
}

function createPrompt(learner) {
  const systemPrompt = `You are Waypath, a personalized learning-path guide. Create a practical learning plan for the learner. Return only valid JSON with this exact structure:
{
  "skillGaps": ["string"],
  "learningSequence": [
    {
      "order": 1,
      "title": "string",
      "type": "course or project",
      "prerequisites": ["string"],
      "estimatedHours": 0,
      "explanation": "string"
    }
  ],
  "milestones": [{ "title": "string", "description": "string" }],
  "projects": [{ "title": "string", "description": "string", "estimatedHours": 0 }],
  "estimatedLearningTime": "string",
  "nextRecommendedAction": "string"
}

Keep recommendations specific to the learner's goal, level, available weekly hours, timeframe, learning style, and known skills. Use simple, encouraging language. Do not include Markdown or text outside the JSON object.`;

  const learnerPrompt = `Learner profile:
- Name: ${learner.name}
- Goal: ${learner.goal}
- Experience level: ${learner.experienceLevel}
- Known skills: ${learner.knownSkills.length ? learner.knownSkills.join(", ") : "None"}
- Weekly learning hours: ${learner.weeklyLearningHours}
- Timeframe: ${learner.timeframe}
- Learning style: ${learner.learningStyle}`;

  return { systemPrompt, learnerPrompt };
}

exports.handler = async (event) => {
  if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
    return response(200, { message: "CORS preflight successful" });
  }

  try {
    const learner = readRequestBody(event);
    const missingFields = validateLearner(learner);

    if (missingFields.length) {
      return response(400, {
        error: "Invalid learner profile",
        details: `Missing or invalid fields: ${missingFields.join(", ")}`,
      });
    }

    const { systemPrompt, learnerPrompt } = createPrompt(learner);
    const command = new ConverseCommand({
      modelId,
      system: [{ text: systemPrompt }],
      messages: [
        {
          role: "user",
          content: [{ text: learnerPrompt }],
        },
      ],
      inferenceConfig: {
        maxTokens: 1800,
        temperature: 0.4,
      },
    });

    const bedrockResponse = await bedrock.send(command);
    const modelText = getResponseText(bedrockResponse);

    if (!modelText) {
      throw new Error("Bedrock returned an empty response");
    }

    let learningPath;
    try {
      const cleanJson = modelText
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/```\s*$/, "")
        .trim();
      learningPath = JSON.parse(cleanJson);
    } catch (error) {
      console.error("Bedrock response was not valid JSON", error);
      return response(502, {
        error: "Bedrock returned an invalid learning path response",
      });
    }

    return response(200, { learningPath });
  } catch (error) {
    console.error("Could not generate learning path", error);

    if (error instanceof SyntaxError) {
      return response(400, { error: "Request body must be valid JSON" });
    }

    return response(500, {
      error: "Could not generate a learning path right now. Please try again.",
    });
  }
};

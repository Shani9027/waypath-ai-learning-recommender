# Waypath backend

This is the first AWS backend endpoint for Waypath. It generates a personalized learning path and sends it back as JSON.

```text
Frontend -> API Gateway -> Lambda -> Amazon Bedrock -> JSON response
```

The frontend is not changed by this backend. There is no database, S3 bucket, login system, or saved user data yet.

## Project structure

```text
backend/
├── index.js
├── lambda/
│   └── generatePath.js
├── package.json
└── README.md
```

## What the Lambda does

The `POST /generate-path` endpoint receives a learner profile, asks Amazon Bedrock for a learning path, and returns the AI result as JSON.

The default Bedrock model is Amazon Nova Lite:

```text
amazon.nova-lite-v1:0
```

The model ID is configurable through an environment variable, so it is easy to change later without editing the JavaScript.

## Environment variables

Set these in the Lambda configuration:

| Variable | Example | Notes |
| --- | --- | --- |
| `BEDROCK_MODEL_ID` | `amazon.nova-lite-v1:0` | Optional. This is also the code default. Pick a Converse-compatible model available in your region. |
| `AWS_REGION` | `us-east-1` | The Lambda and Bedrock model region. |
| `ALLOWED_ORIGIN` | `https://your-site.example.com` | Frontend URL allowed by CORS. For local testing only, `*` is okay. |

Do not add AWS access keys or API keys to this project. Lambda gets access to Bedrock through its execution role.

## Lambda setup

1. Create a Lambda function with Node.js 20.x (or a newer supported Node.js runtime).
2. In the `backend` folder, install dependencies:

   ```bash
   npm install
   ```

3. Zip the contents of the `backend` folder. The zip must include `index.js`, the `lambda` folder, `package.json`, and `node_modules` at its root.
4. Upload the zip to Lambda.
5. Set the handler to:

   ```text
   index.handler
   ```

6. Add the environment variables above.
7. Start with 512 MB memory and a 60-second timeout.

## IAM permissions

The Lambda execution role needs permission to write logs and call Bedrock. This simple starter policy works for a hackathon project:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": "bedrock:InvokeModel",
      "Resource": "*"
    }
  ]
}
```

Before testing, make sure your AWS account has access to the selected Bedrock model in the same region as Lambda.

## API Gateway setup

Create an **HTTP API** in API Gateway. This project does not create AWS resources automatically.

1. Add a route: `POST /generate-path`.
2. Connect that route to this Lambda function.
3. Configure CORS:
   - Allowed origin: your frontend URL.
   - Allowed methods: `POST, OPTIONS`.
   - Allowed headers: `Content-Type, Authorization`.
4. Deploy the API and copy its invoke URL.

The frontend will eventually send requests to:

```text
POST https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/generate-path
```

The Lambda also sends CORS headers in its response.

## Request example

Send this JSON body to `POST /generate-path`:

```json
{
  "name": "Asha",
  "goal": "Become a frontend developer",
  "experienceLevel": "beginner",
  "knownSkills": ["HTML", "CSS"],
  "weeklyLearningHours": "8 hours",
  "timeframe": "6 months",
  "learningStyle": "project-based"
}
```

All fields are required. `knownSkills` must be an array, but it can be empty.

## Response example

On success, the endpoint returns a `200` response:

```json
{
  "learningPath": {
    "skillGaps": ["JavaScript fundamentals", "React state management"],
    "learningSequence": [
      {
        "order": 1,
        "title": "JavaScript Fundamentals",
        "type": "course",
        "prerequisites": ["HTML", "CSS"],
        "estimatedHours": 20,
        "explanation": "Build the programming foundation needed for interactive web apps."
      }
    ],
    "milestones": [
      {
        "title": "Portfolio site",
        "description": "Publish a responsive portfolio project."
      }
    ],
    "projects": [
      {
        "title": "Task tracker",
        "description": "Build a small task tracker using the skills you learned.",
        "estimatedHours": 12
      }
    ],
    "estimatedLearningTime": "About 6 months at 8 hours per week",
    "nextRecommendedAction": "Start JavaScript Fundamentals this week."
  }
}
```

For invalid input or an AI error, the Lambda sends an error response such as:

```json
{
  "error": "Could not generate a learning path right now. Please try again."
}
```

## Testing

Check the Lambda file before deployment:

```bash
npm run check
```

You can also use this test event in the Lambda console:

```json
{
  "requestContext": { "http": { "method": "POST" } },
  "body": "{\"name\":\"Asha\",\"goal\":\"Become a frontend developer\",\"experienceLevel\":\"beginner\",\"knownSkills\":[\"HTML\",\"CSS\"],\"weeklyLearningHours\":\"8 hours\",\"timeframe\":\"6 months\",\"learningStyle\":\"project-based\"}",
  "isBase64Encoded": false
}
```

After API Gateway is deployed, test it with:

```bash
curl -X POST "https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/generate-path" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Asha",
    "goal": "Become a frontend developer",
    "experienceLevel": "beginner",
    "knownSkills": ["HTML", "CSS"],
    "weeklyLearningHours": "8 hours",
    "timeframe": "6 months",
    "learningStyle": "project-based"
  }'
```

If it fails with a Bedrock access error, check the Lambda role, AWS region, model access, and `BEDROCK_MODEL_ID`.

// Learning tracks and their roadmap steps.
const TRACKS = {
  "web-dev": {
    name: "Full-Stack Web Development",
    keywords: [
      "web",
      "website",
      "frontend",
      "front-end",
      "front end",
      "developer",
      "react",
      "javascript",
      "js",
      "full-stack",
      "fullstack",
      "html",
      "css",
      "node",
      "app developer",
    ],
    skillLabels: {
      htmlcss: "HTML/CSS",
      js: "JavaScript",
      react: "React",
      backend: "Backend APIs",
      db: "Databases",
      deploy: "Deployment",
    },
    nodes: [
      {
        id: "wd1",
        title: "HTML & CSS Foundations",
        type: "course",
        level: "beginner",
        hours: 8,
        skills: ["htmlcss"],
        prereq: [],
        desc: "Structure and style web pages from scratch: semantic HTML, the box model, flexbox and grid.",
      },
      {
        id: "wd2",
        title: "JavaScript Fundamentals",
        type: "course",
        level: "beginner",
        hours: 14,
        skills: ["js"],
        prereq: ["htmlcss"],
        desc: "Variables, functions, the DOM, and async patterns — the language every later step relies on.",
      },
      {
        id: "wd3",
        title: "Build a Static Portfolio Site",
        type: "project",
        level: "beginner",
        hours: 6,
        skills: [],
        prereq: ["htmlcss", "js"],
        desc: "A milestone project: ship a responsive personal site using only HTML, CSS and vanilla JS.",
        milestone: true,
      },
      {
        id: "wd4",
        title: "React Essentials",
        type: "course",
        level: "intermediate",
        hours: 16,
        skills: ["react"],
        prereq: ["js"],
        desc: "Components, state, hooks, and client-side routing for building interactive UIs.",
      },
      {
        id: "wd5",
        title: "Node.js & Express APIs",
        type: "course",
        level: "intermediate",
        hours: 14,
        skills: ["backend"],
        prereq: ["js"],
        desc: "Design and build REST APIs, handle auth, and structure a server-side codebase.",
      },
      {
        id: "wd6",
        title: "Databases with PostgreSQL",
        type: "course",
        level: "intermediate",
        hours: 10,
        skills: ["db"],
        prereq: ["backend"],
        desc: "Relational modelling, SQL queries, and connecting a database to your API layer.",
      },
      {
        id: "wd7",
        title: "Full-Stack Task Manager",
        type: "project",
        level: "intermediate",
        hours: 12,
        skills: [],
        prereq: ["react", "backend", "db"],
        desc: "Milestone project: a React front end talking to your own Node/Postgres API, deployed live.",
        milestone: true,
      },
      {
        id: "wd8",
        title: "Deployment & CI/CD",
        type: "course",
        level: "advanced",
        hours: 7,
        skills: ["deploy"],
        prereq: ["db"],
        desc: "Ship with confidence: containers, environment config, and automated pipelines.",
      },
      {
        id: "wd9",
        title: "Capstone: Ship a Full Product",
        type: "project",
        level: "advanced",
        hours: 20,
        skills: [],
        prereq: ["deploy"],
        desc: "Milestone project: design, build and deploy an original full-stack application end to end.",
        milestone: true,
      },
    ],
  },
  "data-science": {
    name: "Data Science & Analytics",
    keywords: [
      "data",
      "analyst",
      "analytics",
      "data science",
      "data scientist",
      "sql",
      "statistics",
      "pandas",
      "data analysis",
    ],
    skillLabels: {
      python: "Python",
      stats: "Statistics",
      sql: "SQL",
      viz: "Visualization",
      ml: "Modelling",
      storytelling: "Data Storytelling",
    },
    nodes: [
      {
        id: "ds1",
        title: "Python for Data Analysis",
        type: "course",
        level: "beginner",
        hours: 12,
        skills: ["python"],
        prereq: [],
        desc: "NumPy and pandas fundamentals: loading, cleaning, and reshaping real datasets.",
      },
      {
        id: "ds2",
        title: "Statistics for Decision Making",
        type: "course",
        level: "beginner",
        hours: 10,
        skills: ["stats"],
        prereq: [],
        desc: "Distributions, hypothesis testing, and confidence intervals, applied to real questions.",
      },
      {
        id: "ds3",
        title: "SQL for Analysts",
        type: "course",
        level: "beginner",
        hours: 8,
        skills: ["sql"],
        prereq: [],
        desc: "Joins, aggregations, and window functions for pulling data out of real databases.",
      },
      {
        id: "ds4",
        title: "Exploratory Data Project",
        type: "project",
        level: "beginner",
        hours: 6,
        skills: [],
        prereq: ["python", "stats", "sql"],
        desc: "Milestone project: clean and explore a messy public dataset, then summarize your findings.",
        milestone: true,
      },
      {
        id: "ds5",
        title: "Data Visualization & Dashboards",
        type: "course",
        level: "intermediate",
        hours: 9,
        skills: ["viz"],
        prereq: ["python"],
        desc: "Design charts and dashboards that communicate clearly, using matplotlib and a BI tool.",
      },
      {
        id: "ds6",
        title: "Intro to Machine Learning",
        type: "course",
        level: "intermediate",
        hours: 16,
        skills: ["ml"],
        prereq: ["python", "stats"],
        desc: "Regression, classification, and model evaluation with scikit-learn.",
      },
      {
        id: "ds7",
        title: "Data Storytelling",
        type: "course",
        level: "intermediate",
        hours: 6,
        skills: ["storytelling"],
        prereq: ["viz"],
        desc: "Turn analysis into a narrative that drives a decision — for a non-technical audience.",
      },
      {
        id: "ds8",
        title: "End-to-End Analytics Project",
        type: "project",
        level: "advanced",
        hours: 14,
        skills: [],
        prereq: ["ml", "storytelling"],
        desc: "Milestone project: go from raw data to a modelled, visualized, presented recommendation.",
        milestone: true,
      },
    ],
  },
  "ai-ml": {
    name: "AI & Machine Learning",
    keywords: [
      "ai",
      "machine learning",
      "ml",
      "deep learning",
      "neural network",
      "nlp",
      "artificial intelligence",
      "llm",
      "genai",
    ],
    skillLabels: {
      python: "Python",
      mathml: "ML Math",
      mlcore: "Core ML",
      dl: "Deep Learning",
      nlp: "NLP/LLMs",
      mlops: "Deployment",
    },
    nodes: [
      {
        id: "ai1",
        title: "Python for Machine Learning",
        type: "course",
        level: "beginner",
        hours: 12,
        skills: ["python"],
        prereq: [],
        desc: "NumPy, pandas, and clean coding patterns used across every ML workflow.",
      },
      {
        id: "ai2",
        title: "Math for ML: Linear Algebra & Calc",
        type: "course",
        level: "beginner",
        hours: 14,
        skills: ["mathml"],
        prereq: [],
        desc: "Vectors, matrices, gradients — the intuition behind how models actually learn.",
      },
      {
        id: "ai3",
        title: "Core Machine Learning",
        type: "course",
        level: "intermediate",
        hours: 18,
        skills: ["mlcore"],
        prereq: ["python", "mathml"],
        desc: "Supervised and unsupervised learning, model selection, and evaluation.",
      },
      {
        id: "ai4",
        title: "Predictive Model Mini-Project",
        type: "project",
        level: "intermediate",
        hours: 8,
        skills: [],
        prereq: ["mlcore"],
        desc: "Milestone project: train and evaluate a model on a real prediction problem.",
        milestone: true,
      },
      {
        id: "ai5",
        title: "Deep Learning Foundations",
        type: "course",
        level: "intermediate",
        hours: 20,
        skills: ["dl"],
        prereq: ["mlcore"],
        desc: "Neural networks, backprop, and training with PyTorch or TensorFlow.",
      },
      {
        id: "ai6",
        title: "NLP & Large Language Models",
        type: "course",
        level: "advanced",
        hours: 16,
        skills: ["nlp"],
        prereq: ["dl"],
        desc: "Transformers, embeddings, and building applications on top of LLMs.",
      },
      {
        id: "ai7",
        title: "MLOps: Deploying Models",
        type: "course",
        level: "advanced",
        hours: 10,
        skills: ["mlops"],
        prereq: ["dl"],
        desc: "Packaging, serving, and monitoring models in production.",
      },
      {
        id: "ai8",
        title: "Capstone: Ship an AI Feature",
        type: "project",
        level: "advanced",
        hours: 18,
        skills: [],
        prereq: ["nlp", "mlops"],
        desc: "Milestone project: build and deploy an AI-powered feature end to end.",
        milestone: true,
      },
    ],
  },
  "ux-design": {
    name: "UX / Product Design",
    keywords: [
      "ux",
      "ui",
      "design",
      "user experience",
      "user interface",
      "product design",
      "designer",
    ],
    skillLabels: {
      research: "User Research",
      wireframe: "Wireframing",
      visual: "Visual Design",
      prototype: "Prototyping",
      testing: "Usability Testing",
    },
    nodes: [
      {
        id: "ux1",
        title: "Foundations of UX Research",
        type: "course",
        level: "beginner",
        hours: 8,
        skills: ["research"],
        prereq: [],
        desc: "Interviews, personas, and journey mapping to understand real user needs.",
      },
      {
        id: "ux2",
        title: "Wireframing & Information Architecture",
        type: "course",
        level: "beginner",
        hours: 9,
        skills: ["wireframe"],
        prereq: [],
        desc: "Structure flows and layouts before a single pixel is polished.",
      },
      {
        id: "ux3",
        title: "Visual Design Principles",
        type: "course",
        level: "intermediate",
        hours: 10,
        skills: ["visual"],
        prereq: ["wireframe"],
        desc: "Typography, color, hierarchy, and grid systems for clean interfaces.",
      },
      {
        id: "ux4",
        title: "Prototyping in Figma",
        type: "course",
        level: "intermediate",
        hours: 8,
        skills: ["prototype"],
        prereq: ["visual"],
        desc: "Build clickable, high-fidelity prototypes ready for testing.",
      },
      {
        id: "ux5",
        title: "Redesign Case Study",
        type: "project",
        level: "intermediate",
        hours: 10,
        skills: [],
        prereq: ["research", "prototype"],
        desc: "Milestone project: research, redesign, and prototype a real product flow.",
        milestone: true,
      },
      {
        id: "ux6",
        title: "Usability Testing",
        type: "course",
        level: "advanced",
        hours: 6,
        skills: ["testing"],
        prereq: ["prototype"],
        desc: "Plan and run tests, then translate findings into design iterations.",
      },
      {
        id: "ux7",
        title: "Portfolio Capstone",
        type: "project",
        level: "advanced",
        hours: 14,
        skills: [],
        prereq: ["testing"],
        desc: "Milestone project: a full case study, tested and iterated, for your portfolio.",
        milestone: true,
      },
    ],
  },
  "product-management": {
    name: "Product Management",
    keywords: ["product manager", "product management", "pm", "product owner"],
    skillLabels: {
      discovery: "Product Discovery",
      strategy: "Strategy",
      roadmap: "Roadmapping",
      metrics: "Metrics",
      stakeholder: "Stakeholder Comms",
    },
    nodes: [
      {
        id: "pm1",
        title: "Product Discovery Fundamentals",
        type: "course",
        level: "beginner",
        hours: 8,
        skills: ["discovery"],
        prereq: [],
        desc: "Talking to users, framing problems, and validating ideas before building.",
      },
      {
        id: "pm2",
        title: "Product Strategy",
        type: "course",
        level: "beginner",
        hours: 9,
        skills: ["strategy"],
        prereq: [],
        desc: "Positioning, prioritization frameworks, and connecting features to business goals.",
      },
      {
        id: "pm3",
        title: "Roadmapping & Prioritization",
        type: "course",
        level: "intermediate",
        hours: 7,
        skills: ["roadmap"],
        prereq: ["strategy"],
        desc: "Build a roadmap stakeholders trust, and say no to the right things.",
      },
      {
        id: "pm4",
        title: "Metrics That Matter",
        type: "course",
        level: "intermediate",
        hours: 8,
        skills: ["metrics"],
        prereq: ["discovery"],
        desc: "Define and track the metrics that actually indicate product health.",
      },
      {
        id: "pm5",
        title: "PRD & Launch Project",
        type: "project",
        level: "intermediate",
        hours: 10,
        skills: [],
        prereq: ["roadmap", "metrics"],
        desc: "Milestone project: write a real PRD and plan a launch from discovery to metrics.",
        milestone: true,
      },
      {
        id: "pm6",
        title: "Stakeholder Communication",
        type: "course",
        level: "advanced",
        hours: 6,
        skills: ["stakeholder"],
        prereq: ["roadmap"],
        desc: "Run effective reviews, manage up, and communicate trade-offs clearly.",
      },
      {
        id: "pm7",
        title: "Capstone: End-to-End Product Plan",
        type: "project",
        level: "advanced",
        hours: 14,
        skills: [],
        prereq: ["stakeholder", "metrics"],
        desc: "Milestone project: a complete product plan, presented as if to real leadership.",
        milestone: true,
      },
    ],
  },
};

// The learner profile and the current roadmap.
let state = {
  name: "",
  goalText: "",
  trackId: null,
  level: null,
  pace: null,
  style: null,
  timeframe: null,
  knownSkills: [],
  path: [], // array of node objects with .status ('completed'|'current'|'locked'|'waived') + .note
  selectedNodeId: null,
  askHistory: {}, // per node id
  skillGapSummary: "",
  aiAvailable: true, // flips false after a failed call so we stop retrying mid-demo
};

// Send a request to Claude. A failed request returns null so the local fallback can continue.
async function callClaude(system, messages, { json = false } = {}) {
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: system,
        messages: messages,
      }),
    });
    const data = await res.json();
    const text = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    if (!text) throw new Error("empty response");
    if (json) {
      const cleaned = text
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/, "")
        .replace(/```\s*$/, "")
        .trim();
      return JSON.parse(cleaned);
    }
    return text;
  } catch (e) {
    console.warn("AI call failed, falling back:", e);
    return null;
  }
}

// Onboarding chat helpers.
function showTyping() {
  const d = document.createElement("div");
  d.className = "bubble bot typing-bubble";
  d.id = "typing-indicator";
  d.innerHTML = `<span class="signpost">Guide</span><span class="typing-dots"><span></span><span></span><span></span></span>`;
  chatLog.appendChild(d);
  chatLog.scrollTop = chatLog.scrollHeight;
}
function hideTyping() {
  const t = document.getElementById("typing-indicator");
  if (t) t.remove();
}

// Save and restore the learner's progress.
const STORAGE_KEY = "waypath:learner-state:v1";
async function saveState() {
  try {
    const snapshot = {
      name: state.name,
      goalText: state.goalText,
      trackId: state.trackId,
      level: state.level,
      pace: state.pace,
      style: state.style,
      timeframe: state.timeframe,
      knownSkills: state.knownSkills,
      path: state.path,
      askHistory: state.askHistory,
      skillGapSummary: state.skillGapSummary,
    };
    await window.storage.set(STORAGE_KEY, JSON.stringify(snapshot), false);
  } catch (e) {
    console.warn("save failed", e);
  }
}
async function loadState() {
  try {
    const res = await window.storage.get(STORAGE_KEY, false);
    if (!res || !res.value) return null;
    return JSON.parse(res.value);
  } catch (e) {
    return null;
  }
}
async function resetDemo() {
  try {
    await window.storage.delete(STORAGE_KEY, false);
  } catch (e) {}
  location.reload();
}

// Onboarding flow.
const chatLog = document.getElementById("chat-log");
const chatControls = document.getElementById("chat-controls");

function addBubble(who, html, signpost) {
  const d = document.createElement("div");
  d.className = "bubble " + who;
  d.innerHTML =
    (who === "bot" && signpost
      ? `<span class="signpost">${signpost}</span>`
      : "") + html;
  chatLog.appendChild(d);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function clearControls() {
  chatControls.innerHTML = "";
}

function detectTrack(text) {
  const lower = text.toLowerCase();
  let best = null,
    bestScore = 0;
  for (const [id, t] of Object.entries(TRACKS)) {
    let score = 0;
    t.keywords.forEach((k) => {
      if (lower.includes(k)) score += k.length;
    });
    if (score > bestScore) {
      bestScore = score;
      best = id;
    }
  }
  return best;
}

function startOnboarding() {
  addBubble(
    "bot",
    "Hi — I'm your Waypath guide, and I use Claude under the hood to actually reason about your goal, not just match keywords. What should I call you?",
    "Guide",
  );
  const inputRow0 = document.createElement("div");
  inputRow0.className = "onboard-input-row";
  inputRow0.innerHTML = `<input type="text" id="name-input" placeholder="Your name"><button class="btn" onclick="submitName()">Next</button>`;
  chatControls.appendChild(inputRow0);
  document.getElementById("name-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitName();
  });
}

function submitName() {
  const v = document.getElementById("name-input").value.trim();
  if (!v) return;
  state.name = v;
  addBubble("user", escapeHtml(v));
  clearControls();
  askGoal();
}

function askGoal() {
  addBubble(
    "bot",
    `Nice to meet you, ${escapeHtml(state.name)}. What's the goal you're working toward? Try something like <i>"I want to become a front-end web developer"</i> or pick an example below.`,
    "Guide",
  );
  const row = document.createElement("div");
  row.className = "chip-row";
  Object.values(TRACKS).forEach((t) => {
    const c = document.createElement("button");
    c.className = "chip";
    c.textContent = t.name;
    c.onclick = () => submitGoal(t.name);
    row.appendChild(c);
  });
  chatLog.appendChild(row);

  const inputRow = document.createElement("div");
  inputRow.className = "onboard-input-row";
  inputRow.innerHTML = `<input type="text" id="goal-input" placeholder="Describe your goal in your own words..."><button class="btn" onclick="submitGoalFromInput()">Send</button>`;
  chatControls.appendChild(inputRow);
  document.getElementById("goal-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitGoalFromInput();
  });
}

function submitGoalFromInput() {
  const v = document.getElementById("goal-input").value.trim();
  if (!v) return;
  submitGoal(v);
}

function submitGoal(text) {
  state.goalText = text;
  addBubble("user", escapeHtml(text));
  clearControls();
  let track = detectTrack(text);
  if (!track) {
    addBubble(
      "bot",
      "I couldn't quite match that to a track yet — which of these is closest to your goal?",
      "Guide",
    );
    const row = document.createElement("div");
    row.className = "chip-row";
    Object.entries(TRACKS).forEach(([id, t]) => {
      const c = document.createElement("button");
      c.className = "chip";
      c.textContent = t.name;
      c.onclick = () => {
        addBubble("user", t.name);
        state.trackId = id;
        askLevel();
      };
      row.appendChild(c);
    });
    chatLog.appendChild(row);
    return;
  }
  state.trackId = track;
  addBubble(
    "bot",
    `Got it — that sounds like <b>${TRACKS[track].name}</b>. Let's tune the route to you.`,
    "Guide",
  );
  setTimeout(askLevel, 250);
}

function askLevel() {
  clearControls();
  addBubble(
    "bot",
    "How would you describe your current experience level in this area?",
    "Guide",
  );
  const row = document.createElement("div");
  row.className = "chip-row";
  [
    ["beginner", "New to this"],
    ["intermediate", "Some experience"],
    ["advanced", "Already fairly skilled"],
  ].forEach(([id, label]) => {
    const c = document.createElement("button");
    c.className = "chip";
    c.textContent = label;
    c.onclick = () => {
      addBubble("user", label);
      state.level = id;
      setTimeout(askPace, 250);
    };
    row.appendChild(c);
  });
  chatLog.appendChild(row);
}

function askPace() {
  clearControls();
  addBubble(
    "bot",
    "How much time can you realistically commit each week?",
    "Guide",
  );
  const row = document.createElement("div");
  row.className = "chip-row";
  [
    ["casual", "2–3 hrs/week"],
    ["steady", "5–7 hrs/week"],
    ["intensive", "10+ hrs/week"],
  ].forEach(([id, label]) => {
    const c = document.createElement("button");
    c.className = "chip";
    c.textContent = label;
    c.onclick = () => {
      addBubble("user", label);
      state.pace = id;
      setTimeout(askTimeframe, 250);
    };
    row.appendChild(c);
  });
  chatLog.appendChild(row);
}

function askTimeframe() {
  clearControls();
  addBubble("bot", "Any target timeframe for reaching this goal?", "Guide");
  const row = document.createElement("div");
  row.className = "chip-row";
  ["1 month", "3 months", "6 months", "No deadline"].forEach((label) => {
    const c = document.createElement("button");
    c.className = "chip";
    c.textContent = label;
    c.onclick = () => {
      addBubble("user", label);
      state.timeframe = label;
      setTimeout(askStyle, 250);
    };
    row.appendChild(c);
  });
  chatLog.appendChild(row);
}

function askStyle() {
  clearControls();
  addBubble("bot", "Last preference — how do you learn best?", "Guide");
  const row = document.createElement("div");
  row.className = "chip-row";
  [
    "Hands-on projects",
    "Video courses",
    "Reading docs/books",
    "A mix of everything",
  ].forEach((label) => {
    const c = document.createElement("button");
    c.className = "chip";
    c.textContent = label;
    c.onclick = () => {
      addBubble("user", label);
      state.style = label;
      setTimeout(askKnownSkills, 250);
    };
    row.appendChild(c);
  });
  chatLog.appendChild(row);
}

function askKnownSkills() {
  clearControls();
  const track = TRACKS[state.trackId];
  addBubble(
    "bot",
    `Last thing — tick anything you already know so I don't waste your time re-teaching it.`,
    "Guide",
  );
  const row = document.createElement("div");
  row.className = "chip-row";
  const selected = new Set();
  Object.entries(track.skillLabels).forEach(([sid, label]) => {
    const c = document.createElement("button");
    c.className = "chip small";
    c.textContent = label;
    c.onclick = () => {
      if (selected.has(sid)) {
        selected.delete(sid);
        c.classList.remove("selected");
      } else {
        selected.add(sid);
        c.classList.add("selected");
      }
    };
    row.appendChild(c);
  });
  chatLog.appendChild(row);
  const doneRow = document.createElement("div");
  doneRow.style.marginTop = "10px";
  doneRow.innerHTML = `<button class="btn" id="finish-onboard-btn">Chart my path →</button>`;
  chatLog.appendChild(doneRow);
  document.getElementById("finish-onboard-btn").onclick = () => {
    state.knownSkills = Array.from(selected);
    const label = state.knownSkills.length
      ? state.knownSkills.map((s) => track.skillLabels[s]).join(", ")
      : "nothing yet — starting fresh";
    addBubble("user", label);
    finishOnboarding();
  };
}

async function finishOnboarding() {
  clearControls();
  showTyping();
  await buildPathWithAI();
  hideTyping();
  if (state.skillGapSummary) {
    addBubble(
      "bot",
      `<span class="ai-tag">AI skill-gap analysis</span><br>${state.skillGapSummary}`,
      "Guide",
    );
  } else {
    addBubble(
      "bot",
      `Charting your route through <b>${TRACKS[state.trackId].name}</b>... skipping what you already know, and adjusting for your experience level.`,
      "Guide",
    );
  }
  document.getElementById("nav-path").disabled = false;
  document.getElementById("nav-dash").disabled = false;
  document.getElementById("sidebar-profile").style.display = "block";
  document.getElementById("sp-track").textContent = TRACKS[state.trackId].name;
  document.getElementById("sp-level").textContent = capitalize(state.level);
  document.getElementById("sp-pace").textContent = state.pace;
  renderPath();
  renderDashboard();
  saveState();
  setTimeout(() => goTo("path"), 400);
}

// AWS API Gateway endpoint for learning path generation
const AWS_GENERATE_PATH_URL =
  "https://i81ne3js36.execute-api.ap-south-1.amazonaws.com/generate-path";

// Call AWS API Gateway to generate a personalized learning path
async function generateLearningPathWithAWS(learner) {
  console.log("[Waypath] Calling AWS learning path API");
  try {
    const res = await fetch(AWS_GENERATE_PATH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(learner),
    });

    if (!res.ok) {
      let errorBody = "";
      try {
        errorBody = await res.text();
      } catch (_) {}
      console.error(
        `[Waypath] AWS API error (HTTP ${res.status} ${res.statusText}):`,
        errorBody,
      );
      return null;
    }

    const data = await res.json();
    if (!data || !data.learningPath) {
      console.error("[Waypath] AWS API error: missing learningPath in response", data);
      return null;
    }

    return data.learningPath;
  } catch (error) {
    console.error("[Waypath] AWS API error:", error);
    return null;
  }
}

// Generate a safe local roadmap first. If AWS API Gateway is available, update it with the AI-generated route.
async function buildPathWithAI() {
  buildPathRuleBased(); // always compute a safe baseline first
  if (!state.aiAvailable) return;

  const track = TRACKS[state.trackId];
  const paceHoursMap = {
    casual: "3",
    steady: "6",
    intensive: "10",
  };
  const weeklyHours =
    paceHoursMap[state.pace] || (state.pace ? String(state.pace) : "5");

  const knownSkillsList = Array.isArray(state.knownSkills)
    ? state.knownSkills.map(
        (s) => (track && track.skillLabels && track.skillLabels[s]) || s,
      )
    : [];

  const learner = {
    name: state.name || "Learner",
    goal: state.goalText || (track ? track.name : "Learn new skills"),
    experienceLevel: state.level || "beginner",
    knownSkills: knownSkillsList,
    weeklyLearningHours: weeklyHours,
    timeframe: state.timeframe || "6 months",
    learningStyle: state.style || "Hands-on projects",
  };

  const learningPath = await generateLearningPathWithAWS(learner);
  if (!learningPath) {
    return; // keep rule-based baseline
  }

  try {
    if (
      Array.isArray(learningPath.learningSequence) &&
      learningPath.learningSequence.length > 0
    ) {
      const milestoneTitles = new Set(
        (learningPath.milestones || []).map((m) =>
          (typeof m === "string" ? m : m.title || "").toLowerCase().trim(),
        ),
      );

      const newPath = learningPath.learningSequence.map((step, idx) => {
        const title = step.title || `Module ${idx + 1}`;
        const isProject =
          (step.type && step.type.toLowerCase().includes("project")) || false;
        const isMilestone =
          isProject || milestoneTitles.has(title.toLowerCase().trim());
        const hours = Number(step.estimatedHours) || 8;
        const prereq = Array.isArray(step.prerequisites)
          ? step.prerequisites
          : [];

        return {
          id: `step-${step.order || idx + 1}`,
          title: title,
          type: isProject ? "project" : step.type || "course",
          level: state.level || "beginner",
          hours: hours,
          skills: Array.isArray(step.skills) ? step.skills : [],
          prereq: prereq,
          desc:
            step.explanation || `${step.type || "Course"} covering ${title}.`,
          milestone: isMilestone,
          trackId: state.trackId,
          status: idx === 0 ? "current" : "locked",
          aiReason: step.explanation || "",
          note: "",
        };
      });

      if (newPath.length) {
        state.path = newPath;
      }
    } else if (Array.isArray(learningPath.order)) {
      const byId = {};
      state.path.forEach((n) => (byId[n.id] = n));
      const waivedSet = new Set(learningPath.waived || []);
      const newPath = learningPath.order.map((id) => byId[id]).filter(Boolean);
      // safety: if AI dropped/invented ids, bail out to the rule-based baseline
      if (newPath.length < state.path.length * 0.6) return;
      newPath.forEach((n) => {
        n.status = waivedSet.has(n.id) ? "waived" : "locked";
        if (learningPath.reasons && learningPath.reasons[n.id])
          n.aiReason = learningPath.reasons[n.id];
      });
      let assigned = false;
      newPath.forEach((n) => {
        if (n.status === "waived") return;
        if (!assigned) {
          n.status = "current";
          assigned = true;
        }
      });
      if (!assigned && newPath.length)
        newPath[newPath.length - 1].status = "current";
      state.path = newPath;
    }

    if (
      Array.isArray(learningPath.skillGaps) &&
      learningPath.skillGaps.length > 0
    ) {
      state.skillGapSummary = `Identified skill gaps to focus on: ${learningPath.skillGaps.join(", ")}.`;
    } else if (
      typeof learningPath.skillGaps === "string" &&
      learningPath.skillGaps
    ) {
      state.skillGapSummary = learningPath.skillGaps;
    } else if (learningPath.skillGapSummary) {
      state.skillGapSummary = learningPath.skillGapSummary;
    }

    if (learningPath.nextRecommendedAction) {
      state.nextRecommendedAction = learningPath.nextRecommendedAction;
    }
  } catch (e) {
    console.warn("AI plan parse failed, keeping rule-based path", e);
  }
}

// Build the local fallback roadmap when AI is unavailable.
function buildPathRuleBased() {
  const track = TRACKS[state.trackId];
  const known = new Set(state.knownSkills);
  const achieved = new Set(state.knownSkills); // grows as we walk the sequence
  let firstPendingSet = false;

  const path = track.nodes.map((n) => {
    const node = Object.assign({}, n);
    node.trackId = state.trackId;

    // 1) waived: every skill this node teaches is already known
    const teachesOnlyKnown =
      n.skills.length > 0 && n.skills.every((s) => known.has(s));
    // 2) experience-based skip: beginner-level, non-project node, and learner rated advanced (or intermediate + it's the very first foundational node)
    const expSkip =
      n.type === "course" &&
      n.level === "beginner" &&
      (state.level === "advanced" ||
        (state.level === "intermediate" && n.prereq.length === 0));

    if (teachesOnlyKnown) {
      node.status = "waived";
      node.note = `You told me you already know ${n.skills.map((s) => track.skillLabels[s]).join(", ")}, so this is skipped.`;
      n.skills.forEach((s) => achieved.add(s));
    } else if (expSkip) {
      node.status = "waived";
      node.note = `Skipped — this is foundational material and you rated yourself ${state.level}. Ask the guide to add it back if you want it.`;
      n.skills.forEach((s) => achieved.add(s));
    } else {
      node.status = "locked";
    }
    return node;
  });

  // second pass: assign current/locked in order for non-waived nodes
  let currentAssigned = false;
  path.forEach((node) => {
    if (node.status === "waived") return;
    if (!currentAssigned) {
      node.status = "current";
      currentAssigned = true;
    } else {
      node.status = "locked";
    }
  });
  if (!currentAssigned && path.length) {
    // everything was waived (rare) — mark last as current for review
    path[path.length - 1].status = "current";
  }

  state.path = path;
}

function recomputeStatuses() {
  // walk in order: once a node is completed, next non-waived becomes current
  let foundCurrent = false;
  for (const node of state.path) {
    if (node.status === "waived" || node.status === "completed") continue;
    if (!foundCurrent) {
      node.status = "current";
      foundCurrent = true;
    } else node.status = "locked";
  }
}

function generateWhy(node) {
  const track = TRACKS[node.trackId];
  if (node.aiReason) return escapeHtml(node.aiReason) + ' <span class="ai-tag">AI</span>';
  if (node.status === "waived") return node.note;
  let parts = [];
  parts.push(
    `Because your goal was <b>"${escapeHtml(state.goalText)}"</b>, this sits on your <b>${track ? track.name : "learning"}</b> route.`,
  );
  if (node.prereq && node.prereq.length) {
    parts.push(
      `It needs ${node.prereq.map((s) => (track && track.skillLabels && track.skillLabels[s]) || s).join(", ")}, which the earlier steps on this trail cover.`,
    );
  } else {
    parts.push(`It has no prerequisites, so it's a safe place to start.`);
  }
  if (node.milestone) {
    parts.push(
      `This is a milestone project — it exists to prove the skills before you move to harder material.`,
    );
  } else if (node.skills && node.skills.length) {
    parts.push(
      `It teaches ${node.skills.map((s) => (track && track.skillLabels && track.skillLabels[s]) || s).join(", ")}, a gap in what you told me you know.`,
    );
  }
  if (node.note) parts.push(node.note);
  return parts.join(" ");
}

// Render the learning trail and waypoint details.
function renderPath() {
  const track = TRACKS[state.trackId];
  document.getElementById("path-title").textContent = track.name + " — Route";
  const n = state.path.length;
  const width = 760,
    rowH = 128,
    topPad = 60,
    botPad = 50;
  const height = topPad + botPad + (n - 1) * rowH;
  const cx = width / 2,
    amp = 190;

  const pts = state.path.map((node, i) => {
    const y = topPad + i * rowH;
    const x =
      cx + Math.sin(i * 0.95 + 0.3) * amp * 0.5 + (i % 2 === 0 ? -1 : 1) * 40;
    return { x, y, node, i };
  });

  // smooth path through points (catmull-rom -> bezier)
  function smoothPath(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? 0 : i - 1],
        p1 = points[i],
        p2 = points[i + 1],
        p3 = points[i + 2 === points.length ? i + 1 : i + 2];
      const cp1x = p1.x + (p2.x - p0.x) / 6,
        cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6,
        cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  }
  const fullPathD = smoothPath(pts);

  // progress path (up to last completed/current index)
  let lastDoneIdx = -1;
  pts.forEach((p, i) => {
    if (p.node.status === "completed") lastDoneIdx = i;
  });
  const progressPts = pts.slice(0, Math.max(lastDoneIdx + 1, 1));
  const progressD = lastDoneIdx >= 0 ? smoothPath(progressPts) : "";

  // contour decorative lines
  let contours = "";
  for (let c = 0; c < 5; c++) {
    const yy = 20 + c * (height / 5);
    contours += `<path d="M -20 ${yy} Q ${width * 0.25} ${yy - 30 + c * 8}, ${width * 0.5} ${yy} T ${width + 20} ${yy}" stroke="var(--contour)" stroke-width="1.4" fill="none" opacity="0.6"/>`;
  }

  let nodesSvg = "";
  pts.forEach(({ x, y, node, i }) => {
    const status = node.status;
    const isMilestone = node.milestone;
    const labelSide = x > cx ? 1 : -1;
    const labelX = x + labelSide * 30;
    const anchor = labelSide > 0 ? "start" : "end";

    let fill = "var(--trail-locked)",
      stroke = "var(--trail-locked)",
      textOpacity = 0.55;
    if (status === "completed") {
      fill = "var(--trail)";
      stroke = "var(--trail-dark)";
      textOpacity = 1;
    } else if (status === "current") {
      fill = "var(--water)";
      stroke = "var(--water)";
      textOpacity = 1;
    } else if (status === "waived") {
      fill = "var(--paper)";
      stroke = "var(--waypoint)";
      textOpacity = 0.6;
    }

    const r = isMilestone ? 15 : 11;
    let shape;
    if (isMilestone) {
      shape = `<path d="M ${x} ${y - r} L ${x + r} ${y} L ${x} ${y + r} L ${x - r} ${y} Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
    } else {
      shape = `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
    }
    let pulse =
      status === "current"
        ? `<circle cx="${x}" cy="${y}" r="${r + 7}" fill="none" stroke="var(--water)" stroke-width="1.5" opacity="0.5"><animate attributeName="r" values="${r + 4};${r + 11};${r + 4}" dur="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.55;0;0.55" dur="2.2s" repeatCount="indefinite"/></circle>`
        : "";
    let checkmark =
      status === "completed"
        ? `<text x="${x}" y="${y + 4}" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">✓</text>`
        : "";
    let strike =
      status === "waived"
        ? `<line x1="${x - r + 3}" y1="${y}" x2="${x + r - 3}" y2="${y}" stroke="var(--waypoint)" stroke-width="1.6"/>`
        : "";

    nodesSvg += `
      <g class="path-node" data-id="${node.id}" style="cursor:pointer" onclick="selectNode('${node.id}')">
        ${pulse}
        ${shape}
        ${checkmark}${strike}
        <text class="node-label" x="${labelX}" y="${y - 4}" text-anchor="${anchor}" opacity="${textOpacity}">${escapeHtml(node.title)}</text>
        <text class="node-sub" x="${labelX}" y="${y + 12}" text-anchor="${anchor}" opacity="${textOpacity * 0.85}">${node.type.toUpperCase()} · ${node.hours}h${isMilestone ? " · MILESTONE" : ""}</text>
      </g>`;
  });

  const svg = `
  <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${width}" height="${height}" fill="var(--paper-panel)"/>
    ${contours}
    <path d="${fullPathD}" stroke="var(--trail-locked)" stroke-width="5" fill="none" stroke-linecap="round"/>
    ${progressD ? `<path d="${progressD}" stroke="var(--trail)" stroke-width="5" fill="none" stroke-linecap="round"/>` : ""}
    ${nodesSvg}
  </svg>`;
  document.getElementById("trail-wrap").innerHTML = svg;

  if (state.selectedNodeId) renderDetail(state.selectedNodeId);
}

function selectNode(id) {
  state.selectedNodeId = id;
  renderDetail(id);
}

function findNode(id) {
  return state.path.find((n) => n.id === id);
}

function renderDetail(id) {
  const node = findNode(id);
  if (!node) return;
  const track = TRACKS[node.trackId];
  const canComplete = node.status === "current";
  const html = `
    <div class="detail-type">${node.type}${node.milestone ? " · milestone" : ""}</div>
    <h3>${escapeHtml(node.title)}</h3>
    <span class="status-pill ${node.status}">${node.status.toUpperCase()}</span>
    <div class="detail-meta" style="margin-top:10px;">
      <span>⏱ ${node.hours}h</span>
      <span>LVL ${node.level}</span>
      ${node.skills && node.skills.length ? `<span>+${node.skills.map((s) => (track && track.skillLabels && track.skillLabels[s]) || s).join(", ")}</span>` : ""}
    </div>
    <div class="detail-desc">${escapeHtml(node.desc)}</div>
    <div class="why-box"><b>Why this is on your route</b><br>${generateWhy(node)}</div>
    <div class="detail-actions">
      ${canComplete ? `<button class="btn small" onclick="markComplete('${node.id}')">Mark complete</button>` : ""}
      ${canComplete ? `<button class="btn ghost small" onclick="feedback('${node.id}','easy')">Too easy</button>` : ""}
      ${canComplete ? `<button class="btn ghost small" onclick="feedback('${node.id}','hard')">Too hard</button>` : ""}
    </div>
  `;
  document.getElementById("detail-card").innerHTML = html;

  // ask log for this node
  const askLogEl = document.getElementById("ask-log");
  askLogEl.innerHTML = (state.askHistory[id] || [])
    .map((m) => `<div class="a-bubble ${m.who}">${m.html}</div>`)
    .join("");
  askLogEl.scrollTop = askLogEl.scrollHeight;
}

function markComplete(id) {
  const node = findNode(id);
  node.status = "completed";
  recomputeStatuses();
  renderPath();
  renderDashboard();
  selectNode(id);
  saveState();
}

async function feedback(id, kind) {
  const node = findNode(id);
  const track = TRACKS[node.trackId];

  let remedial = null;
  if (kind === "easy") {
    node.status = "waived";
    node.note = `Marked "too easy" — skipped ahead, but flagged for lighter review before your milestone.`;
  } else if (kind === "hard") {
    remedial = {
      id: id + "-remedial-" + Date.now(),
      title: "Refresher: " + node.title,
      type: "course",
      level: "beginner",
      hours: Math.max(3, Math.round(node.hours / 2)),
      skills: [],
      prereq: [],
      desc: `A shorter refresher inserted because "${node.title}" was flagged as too hard — covers the same ground at a slower pace.`,
      trackId: node.trackId,
      status: "locked",
      note: 'Inserted automatically after your "too hard" feedback.',
    };
    const idx = state.path.findIndex((n) => n.id === id);
    state.path.splice(idx, 0, remedial);
  }
  recomputeStatuses();
  renderPath();
  renderDashboard();
  selectNode(id);
  saveState();

  // ask the AI for a short human explanation of the roadmap adjustment it just made
  if (state.aiAvailable) {
    const system = `You are the Waypath learning guide. The learner just gave feedback on a waypoint and their roadmap was automatically adjusted. Write ONE short second-person sentence (max 30 words) explaining the adjustment in an encouraging, plain-spoken way. No markdown.`;
    const userMsg =
      kind === "easy"
        ? `Learner (${state.name}, goal: "${state.goalText}") marked "${node.title}" as too easy. It was skipped/waived in their route.`
        : `Learner (${state.name}, goal: "${state.goalText}") marked "${node.title}" as too hard. A shorter refresher course "${remedial.title}" was auto-inserted right before it.`;
    const note = await callClaude(system, [{ role: "user", content: userMsg }]);
    if (note) {
      addRoadmapUpdateBubble(note);
    }
  }
}

// Show a short message after the roadmap changes.
function addRoadmapUpdateBubble(text) {
  const wrap = document.getElementById("trail-wrap");
  const toast = document.createElement("div");
  toast.className = "roadmap-toast";
  toast.innerHTML = `<span class="ai-tag">Roadmap updated</span> ${escapeHtml(text)}`;
  wrap.parentElement.insertBefore(toast, wrap);
  setTimeout(() => toast.remove(), 7000);
}

// Ask the guide about the selected waypoint, with a local fallback response.
async function askGuide() {
  const input = document.getElementById("ask-input");
  const q = input.value.trim();
  if (!q || !state.selectedNodeId) return;
  const node = findNode(state.selectedNodeId);
  const track = TRACKS[node.trackId];
  if (!state.askHistory[node.id]) state.askHistory[node.id] = [];
  state.askHistory[node.id].push({ who: "q", html: escapeHtml(q) });
  input.value = "";
  state.askHistory[node.id].push({
    who: "a",
    html: '<span class="typing-dots"><span></span><span></span><span></span></span>',
    pending: true,
  });
  renderDetail(node.id);

  let answer = null;
  if (state.aiAvailable) {
    const idx = state.path.findIndex((n) => n.id === node.id);
    const nxt = state.path.slice(idx + 1).find((n) => n.status !== "waived");
    const system = `You are the Waypath learning guide, a friendly AI assistant embedded in a personalized learning path app. The learner is looking at one specific waypoint on their roadmap. Answer their question in 1-3 short sentences, conversational, second person, grounded ONLY in the data given — never invent course content that isn't described. If asked something unrelated to this waypoint or their path, gently redirect to what you can help with.

Learner: ${state.name}, goal: "${state.goalText}", level: ${state.level}, pace: ${state.pace}.
Current waypoint: "${node.title}" (${node.type}, level ${node.level}, ${node.hours}h, status ${node.status}). Description: ${node.desc}. Skills taught: ${(node.skills || []).map((s) => track.skillLabels[s]).join(", ") || "none (project/milestone)"}. Prerequisite skills: ${(node.prereq || []).map((s) => track.skillLabels[s]).join(", ") || "none"}. Next waypoint after this: ${nxt ? nxt.title : "none — this is the last one"}.`;
    const history = (state.askHistory[node.id] || [])
      .filter((m) => !m.pending)
      .slice(-8)
      .map((m) => ({
        role: m.who === "q" ? "user" : "assistant",
        content: stripHtml(m.html),
      }));
    answer = await callClaude(
      system,
      history.length ? history : [{ role: "user", content: q }],
    );
  }
  if (!answer) {
    // canned fallback if API unavailable
    const lower = q.toLowerCase();
    if (lower.includes("why")) answer = generateWhy(node);
    else if (lower.includes("long") || lower.includes("hour"))
      answer = `About ${node.hours} hours at a normal pace.`;
    else if (lower.includes("skip"))
      answer =
        node.status === "current"
          ? `Use "Too easy" or "Too hard" below to adjust it.`
          : `This one isn't active yet.`;
    else if (lower.includes("next")) {
      const idx = state.path.findIndex((n) => n.id === node.id);
      const nxt = state.path.slice(idx + 1).find((n) => n.status !== "waived");
      answer = nxt
        ? `Next up: ${escapeHtml(nxt.title)}.`
        : `This is the last step.`;
    } else
      answer = `I can tell you why a step is on your route, how long it'll take, or what's next.`;
  }

  const arr = state.askHistory[node.id];
  arr[arr.length - 1] = { who: "a", html: answer };
  renderDetail(node.id);
  saveState();
}
function stripHtml(html) {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d.textContent || "";
}

// Dashboard and skill radar.
function renderDashboard() {
  if (!state.path.length) return;
  const track = TRACKS[state.trackId];
  const total = state.path.filter((n) => n.status !== "waived").length || 1;
  const completed = state.path.filter((n) => n.status === "completed").length;
  const pct = Math.round((completed / total) * 100);
  document.getElementById("dash-progress-sub").textContent =
    `${completed} of ${total} waypoints complete`;
  document.getElementById("dash-progress-fill").style.width = pct + "%";

  const hours = state.path
    .filter((n) => n.status === "completed")
    .reduce((a, n) => a + n.hours, 0);
  const skillSet = new Set(state.knownSkills);
  state.path.forEach((n) => {
    if (n.status === "completed" || n.status === "waived")
      n.skills.forEach((s) => skillSet.add(s));
  });
  document.getElementById("stat-hours").textContent = hours;
  document.getElementById("stat-skills").textContent = skillSet.size;
  const milestonesDone = state.path.filter(
    (n) => n.milestone && n.status === "completed",
  ).length;
  document.getElementById("stat-milestones").textContent = milestonesDone;

  // milestone list
  const mlist = document.getElementById("milestone-list");
  const milestones = state.path.filter((n) => n.milestone);
  const firstUpcoming = milestones.find((n) => n.status !== "completed");
  mlist.innerHTML =
    milestones
      .map((m) => {
        const cls =
          m.status === "completed"
            ? "done"
            : m === firstUpcoming
              ? "next"
              : "todo";
        const icon =
          m.status === "completed" ? "✓" : m === firstUpcoming ? "→" : "·";
        return `<li><span class="m-icon ${cls}">${icon}</span><span>${escapeHtml(m.title)}</span></li>`;
      })
      .join("") || '<li style="color:var(--ink-faint)">No milestones yet.</li>';

  // next action
  const current = state.path.find((n) => n.status === "current");
  document.getElementById("na-title").textContent = current
    ? current.title
    : "All waypoints complete!";

  // radar chart
  renderRadar(track, skillSet);
}

function renderRadar(track, skillSet) {
  if (!track || !track.skillLabels) {
    const radarWrap = document.getElementById("radar-wrap");
    if (radarWrap) radarWrap.innerHTML = "";
    return;
  }
  const skills = Object.keys(track.skillLabels);
  const labels = Object.values(track.skillLabels);
  const N = skills.length;
  const size = 260,
    cx = size / 2,
    cy = size / 2,
    R = 90;
  const angle = (i) => -Math.PI / 2 + i * ((2 * Math.PI) / N);

  // value: 1 if known/achieved, .0 baseline .15 for visibility, scale by how many nodes for that skill are completed vs total nodes teaching it
  const totalForSkill = {};
  const doneForSkill = {};
  skills.forEach((s) => {
    totalForSkill[s] = 0;
    doneForSkill[s] = 0;
  });
  track.nodes.forEach((n) =>
    n.skills.forEach((s) => {
      totalForSkill[s] = (totalForSkill[s] || 0) + 1;
    }),
  );
  state.path.forEach((n) => {
    if (n.status === "completed" || n.status === "waived")
      n.skills.forEach((s) => {
        doneForSkill[s] = (doneForSkill[s] || 0) + 1;
      });
  });

  const values = skills.map((s) => {
    if (totalForSkill[s] === 0) return 0.15;
    return Math.max(0.15, doneForSkill[s] / totalForSkill[s]);
  });

  function pt(i, val) {
    const a = angle(i);
    return [cx + Math.cos(a) * R * val, cy + Math.sin(a) * R * val];
  }

  let gridRings = "";
  [0.25, 0.5, 0.75, 1].forEach((f) => {
    const ptsStr = skills.map((s, i) => pt(i, f).join(",")).join(" ");
    gridRings += `<polygon points="${ptsStr}" fill="none" stroke="var(--line)" stroke-width="1"/>`;
  });
  let spokes = "";
  skills.forEach((s, i) => {
    const [x, y] = pt(i, 1);
    spokes += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--line)" stroke-width="1"/>`;
  });

  const dataPts = values.map((v, i) => pt(i, v).join(",")).join(" ");
  const dataPoly = `<polygon points="${dataPts}" fill="var(--waypoint)" fill-opacity="0.28" stroke="var(--waypoint)" stroke-width="2"/>`;

  let labelsSvg = "";
  skills.forEach((s, i) => {
    const [x, y] = pt(i, 1.28);
    labelsSvg += `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="10.5" fill="var(--ink-soft)" font-family="IBM Plex Mono, monospace">${labels[i]}</text>`;
  });

  const svg = `<svg viewBox="0 0 ${size} ${size + 16}" width="100%" style="max-width:300px;">
    <g transform="translate(0,8)">${gridRings}${spokes}${dataPoly}${labelsSvg}</g>
  </svg>`;
  document.getElementById("radar-wrap").innerHTML = svg;
}

// Navigation and small display helpers.
function goTo(view) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  document
    .querySelectorAll(".nav-item")
    .forEach((v) => v.classList.remove("active"));
  document.getElementById("view-" + view).classList.add("active");
  document
    .querySelector(`.nav-item[data-view="${view}"]`)
    .classList.add("active");
  if (view === "dash") renderDashboard();
}

function capitalize(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}
function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// Restore a saved learner profile, or start a new onboarding session.
async function init() {
  const saved = await loadState();
  if (saved && saved.trackId && saved.path && saved.path.length) {
    Object.assign(state, saved);
    document.getElementById("nav-path").disabled = false;
    document.getElementById("nav-dash").disabled = false;
    document.getElementById("sidebar-profile").style.display = "block";
    document.getElementById("sp-track").textContent =
      TRACKS[state.trackId].name;
    document.getElementById("sp-level").textContent = capitalize(state.level);
    document.getElementById("sp-pace").textContent = state.pace;
    addBubble(
      "bot",
      `Welcome back, ${escapeHtml(state.name || "there")} — I've restored your <b>${TRACKS[state.trackId].name}</b> route from where you left off.`,
      "Guide",
    );
    renderPath();
    renderDashboard();
    goTo("path");
  } else {
    startOnboarding();
  }
}
init();

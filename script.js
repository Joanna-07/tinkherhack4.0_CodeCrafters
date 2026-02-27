// ---------- LANDING PAGE ----------
function analyzeNews() {
  const text = document.getElementById("newsInput").value;

  if (!text) {
    alert("Enter news first");
    return;
  }

  localStorage.setItem("news", text);

  document.getElementById("thinking").classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "result.html";
  }, 2500);
}

// thinking dots
setInterval(() => {
  const dots = document.querySelector(".dots");
  if (dots) {
    dots.textContent =
      ".".repeat((dots.textContent.length % 3) + 1);
  }
}, 500);


// ---------- RESULT PAGE ----------
window.onload = function () {

  if (!document.getElementById("biasBar")) return;

  animateBar("biasBar");
  animateBar("emotionBar");
  animateBar("clickbaitBar");
  animateBar("factBar");

  animateGauge();
  detectSource();
  startCounter();
  suggestActions();
};

function animateBar(id) {
  const value = Math.random() * 100;
  document.getElementById(id).style.width = value + "%";
}

function animateGauge() {
  const score = Math.floor(Math.random() * 100);
  document.getElementById("gaugeFill").style.width = score + "%";
}

function detectSource() {
  const sources = [
    "Twitter/X Source",
    "WhatsApp Forward",
    "Unknown Blog",
    "News Website"
  ];

  document.getElementById("sourceTag").innerText =
    sources[Math.floor(Math.random()*sources.length)];
}

// GLOBAL MISINFORMATION COUNTER
let count = 4821932;

function startCounter() {
  const el = document.getElementById("counter");

  setInterval(() => {
    count += Math.floor(Math.random()*5);
    el.innerText = count.toLocaleString() +
      " suspicious posts detected today";
  }, 1200);
}

// ACTION SUGGESTIONS
function suggestActions() {
  const actions = [
    "Verify using trusted news sites",
    "Search headline on Google",
    "Check reverse image search",
    "Avoid forwarding immediately"
  ];

  const ul = document.getElementById("actions");

  actions.forEach(a => {
    let li = document.createElement("li");
    li.textContent = "✔ " + a;
    ul.appendChild(li);
  });
}

// ---------- QUIZ ----------
function submitQuiz() {
  const checks =
    document.querySelectorAll("#quiz input:checked").length;

  const result = document.getElementById("quizResult");

  if (checks >= 3)
    result.innerText = "✅ Responsible Sharer!";
  else
    result.innerText =
      "⚠ Verify more before sharing.";
}
// ================= NEWSROOM FEED =================

const fakeNews = [
  "Deepfake celebrity scam spreading globally",
  "Fake earthquake warning circulating on WhatsApp",
  "AI-generated election speech detected",
  "Edited protest image misleading users",
  "Fake scholarship message trending in India"
];

function startFeed() {
  const feed = document.getElementById("feed");
  if (!feed) return;

  setInterval(() => {
    const item = document.createElement("p");

    const time = new Date().toLocaleTimeString();

    item.innerHTML =
      "⚠ [" + time + "] " +
      fakeNews[Math.floor(Math.random()*fakeNews.length)];

    feed.prepend(item);

    if (feed.children.length > 8)
      feed.removeChild(feed.lastChild);

  }, 2000);
}

startFeed();


// ================= AI TYPING EXPLANATION =================

function typeExplanation(text, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let i = 0;

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 25);
    }
  }

  typing();
}
// ================= FINAL JUDGE MODE =================

window.onload = function () {

  if (!document.getElementById("biasBar")) return;

  animateBar("biasBar");
  animateBar("emotionBar");
  animateBar("clickbaitBar");
  animateBar("factBar");

  animateGauge();
  detectSource();
  reputationScore();
  startCounter();
  suggestActions();
  startExplanation();
};

// Reputation Score
function reputationScore() {
  const score = Math.random()*100;
  document.getElementById("repBar").style.width = score + "%";
}

// AI Explanation Typing
function startExplanation() {

  const text =
  "Our AI detected emotionally persuasive language and potential " +
  "clickbait framing. Claims lack strong verifiable references. " +
  "Users are advised to cross-check trusted news outlets before sharing.";

  typeExplanation(text,"aiExplanation");
}

// Fake PDF Download
function downloadReport() {

  const content =
    "TruthLens AI Report\n\n" +
    "Truth Score: Moderate Risk\n" +
    "Recommendation: Verify before sharing.";

  const blob = new Blob([content], {type:"text/plain"});
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "TruthLens_Report.txt";
  link.click();
}
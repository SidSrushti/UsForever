const videoIntro = document.getElementById('videoIntro');
const loveVideo = document.getElementById('loveVideo');
const skipBtn = document.getElementById('skipBtn');

const chatContainer = document.getElementById('chatContainer');
const chatMessages = document.getElementById('chatMessages');
const revealBtn = document.getElementById('revealBtn');
const surprise = document.getElementById('surprise');
const loveAudio = document.getElementById('loveAudio');

// Your heartfelt messages here:
const messages = [
  "Hey Srushti, I made this just for you 💕",
  "Remember the day we met? It feels like a beautiful dream.",
  "Every moment with you is lovely ✨",
  "I want to spend a lifetime making you smile 😊",
  "Click the button below for a little surprise...",
];

// Helper function: delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Function to type messages one by one
async function playChat() {
  chatContainer.classList.remove('hidden');
  for (let i = 0; i < messages.length; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    chatMessages.appendChild(bubble);

    // Type text effect
    for (let j = 0; j <= messages[i].length; j++) {
      bubble.textContent = messages[i].slice(0, j);
      await delay(40);
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
    await delay(1200);
  }
  revealBtn.classList.remove('hidden');
}

// When video ends or skip pressed
function startChat() {
  videoIntro.classList.add('hidden');
  playChat();
  loveAudio.pause();  // pause surprise audio if any
  surprise.classList.add('hidden');
}

// Video ended event
loveVideo.addEventListener('ended', startChat);

// Skip button clicked
skipBtn.addEventListener('click', () => {
  loveVideo.pause();
  startChat();
});

// Reveal button clicked
revealBtn.addEventListener('click', () => {
  chatContainer.classList.add('hidden');
  surprise.classList.remove('hidden');
  loveAudio.play();
});

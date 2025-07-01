// Countdown Logic
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1); // Adjust to tomorrow
targetDate.setHours(0,0,0,0);

const countdownEl = document.getElementById('countdown');
const countdownScreen = document.getElementById('countdown-screen');
const mainContent = document.getElementById('main-content');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownScreen.style.opacity = '0';
    setTimeout(() => {
      countdownScreen.style.display = 'none';
      mainContent.style.display = 'block';
      startDecorations();
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        shapes: ['heart'],
        colors: ['#ff69b4', '#ff1493', '#ff85a2']
      });
    }, 1000);
  } else {
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Decorations
const heartsContainer = document.getElementById('hearts-container');
const sparklesContainer = document.getElementById('sparkles-container');
const tulipsContainer = document.getElementById('tulips-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDuration = (5 + Math.random() * 5) + 's';
  sparklesContainer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 8000);
}

function createTulip() {
  const tulip = document.createElement('div');
  tulip.className = 'tulip';
  tulip.style.left = Math.random() * 100 + 'vw';
  tulip.style.animationDuration = (8 + Math.random() * 4) + 's';
  tulipsContainer.appendChild(tulip);
  setTimeout(() => tulip.remove(), 12000);
}

function startDecorations() {
  setInterval(createHeart, 500);
  setInterval(createSparkle, 300);
  setInterval(createTulip, 700);
}

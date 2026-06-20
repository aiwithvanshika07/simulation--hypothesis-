const particleContainer = document.getElementById("particles");

function createParticles() {
  if (!particleContainer) return;

  for (let i = 0; i < 55; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = 6 + Math.random() * 10 + "s";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);
  }
}

createParticles();

const cards = document.querySelectorAll(
  ".glass-card, .timeline-item, .quote-section, .section-title"
);

cards.forEach((item) => {
  item.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

cards.forEach((item) => {
  revealObserver.observe(item);
});

const thoughtBox = document.querySelector(".thought-box");
const submitBtn = document.querySelector(".thought-box + .btn");

if (thoughtBox && submitBtn) {
  const savedThought = localStorage.getItem("vanshikaSimulationThought");

  if (savedThought) {
    thoughtBox.value = savedThought;
  }

  submitBtn.addEventListener("click", () => {
    const text = thoughtBox.value.trim();

    if (text.length < 10) {
      alert("Please write your thought in a little more detail.");
      return;
    }

    localStorage.setItem("vanshikaSimulationThought", text);
    alert("Your thought has been saved on this device.");
  });
    }

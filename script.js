const confettiLayer = document.querySelector(".confetti-layer");

if (confettiLayer) {
  const colors = [
    "#f9d26a",
    "#ff8a4c",
    "#ff6e8c",
    "#9b8ef5",
    "#aacd86",
    "#ffffff",
  ];

  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * -20}%`;
    piece.style.animationDelay = `${Math.random() * 8}s`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `scale(${0.8 + Math.random() * 1.2})`;
    confettiLayer.appendChild(piece);
  }
}

const yearElement = document.createElement("span");
yearElement.textContent = new Date().getFullYear();

const title = document.querySelector(".brand");
if (title) {
  title.setAttribute("data-year", yearElement.textContent);
}

// Image Slider Functionality (Hero Section)
let currentSlide = 0;
const heroSlider = document.querySelector(".hero-slider");
const slides = heroSlider ? heroSlider.querySelectorAll(".slide") : [];
const dots = heroSlider ? heroSlider.querySelectorAll(".dot") : [];
const prevBtn = heroSlider
  ? heroSlider.querySelector(".slider-btn.prev")
  : null;
const nextBtn = heroSlider
  ? heroSlider.querySelector(".slider-btn.next")
  : null;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Initialize first slide
if (slides.length > 0) {
  showSlide(0);
}

let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll(".slider-slide");
    if (!slides.length) return;

    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
    });
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".slider-slide");
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    const slides = document.querySelectorAll(".slider-slide");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.addEventListener("DOMContentLoaded", () => showSlide(0));
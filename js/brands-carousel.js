const slides = [
  '<li class="clients-carousel__slide"><img src="https://res2.weblium.site/res/60080b98d4893c0021b21b64/600aed1c7435c100224b3f62" alt="Slide 1" class="carousel__image"></li>',
  '<li class="clients-carousel__slide"><img src="https://res2.weblium.site/res/60080b98d4893c0021b21b64/600aed1f7539e400220f5cb7" alt="Slide 2" class="carousel__image"></li>',
  '<li class="clients-carousel__slide"><img src="https://res2.weblium.site/res/60080b98d4893c0021b21b64/600aed71b8ff05002226125e" alt="Slide 3" class="carousel__image"></li>',
  '<li class="clients-carousel__slide"><img src="https://res2.weblium.site/res/60080b98d4893c0021b21b64/600aed7448c6e50022b26c9c" alt="Slide 4" class="carousel__image"></li>',
  '<li class="clients-carousel__slide"><img src="https://res2.weblium.site/res/60080b98d4893c0021b21b64/600aee2abec3580022ddd618" alt="Slide 5" class="carousel__image"></li>',
];

let currentIndex = 0;

function renderCarousel(slides) {
  const track = document.querySelector(".clients-carousel__track");
  track.innerHTML = "";
  const slidesToShow = calculateSlidesToShow();
  for (let i = 0; i < slidesToShow; i++) {
    const slideIndex = (currentIndex + i) % slides.length;
    track.innerHTML += slides[slideIndex];
  }

  updateIndicators();
}

function calculateSlidesToShow() {
  if (window.matchMedia("(min-width:1024px)").matches) {
    return 4;
  } else if (window.matchMedia("(min-width:768px)").matches) {
    return 3;
  } else if (window.matchMedia("(min-width:580px)").matches) {
    return 2;
  } else {
    return 1;
  }
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".clients-carousel__indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      "clients-carousel__indicator--active",
      index === currentIndex
    );
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  renderCarousel(slides);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  renderCarousel(slides);
}

const nextButton = document.querySelector(".clients-carousel__button--right");
const prevButton = document.querySelector(".clients-carousel__button--left");
const indicators = document.querySelectorAll(".clients-carousel__indicator");

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    renderCarousel(slides);
  });
});

renderCarousel(slides);

window.addEventListener("resize", () => renderCarousel(slides));

const slides = document.querySelectorAll(".carousel-items img");
const indicators = document.querySelectorAll(".indicator");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const intervalTime = 3000; // 3 segundos
const total = slides.length - 1;
let current = 0;
let interval;

// função que define qual slide será ativo
function showSlide(n) {
  if (n >= slides.length) current = 0;
  if (n < 0) current = slides.length - 1;
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide-active");
  }
  slides[current].classList.add("slide-active");
  this.activeIndicators();
}

function nextSlide() {
  current++;
  showSlide(current);
}

function previousSlide() {
  current--;
  showSlide(current);
}

function activeIndicators() {
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
  indicators[current].classList.add("active");
}

// definindo o intervalo de tempo
interval = setInterval(nextSlide, intervalTime);

// evento de clique no botão "next"
nextButton.addEventListener("click", () => {
  clearInterval(interval); // parando o intervalo atual
  this.nextSlide();
  interval = setInterval(nextSlide, intervalTime); // definindo um novo intervalo
});

// evento de clique no botão "previous"
prevButton.addEventListener("click", () => {
  clearInterval(interval); // parando o intervalo atual
  this.previousSlide();
  interval = setInterval(nextSlide, intervalTime); // definindo um novo intervalo
});
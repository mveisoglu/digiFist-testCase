const currentSlide = 0;
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", function () {
  goToPrevSlide();
});

nextBtn.addEventListener("click", function () {
  goToNextSlide();
});

function goToPrevSlide() {
  cards[currentSlide].style.display = "none";
  currentSlide = currentSlide > 0 ? currentSlide - 1 : cards.length - 1;
  cards[currentSlide].style.display = "block";
}

function goToNextSlide() {
  cards[currentSlide].style.display = "none";
  currentSlide = currentSlide < cards.length - 1 ? currentSlide + 1 : 0;
  cards[currentSlide].style.display = "block";
}

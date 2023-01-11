// DOM nesnelerini seçin
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Önceki slide'ı göster
prevBtn.addEventListener("click", () => {
  slider.scrollLeft -= slider.offsetWidth;
});

// Sonraki slide'ı göster
nextBtn.addEventListener("click", () => {
  slider.scrollLeft += slider.offsetWidth;
});

// Slider'ı otomatik olarak hareket ettirin (isteğe bağlı)
const autoSlide = setInterval(() => {
  slider.scrollLeft += slider.offsetWidth;
}, 3000);

// Otomatik hareketi durdurun (isteğe bağlı)
slider.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

// Otomatik hareketi tekrar başlatın (isteğe bağlı)
slider.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    slider.scrollLeft += slider.offsetWidth;
  }, 3000);
});

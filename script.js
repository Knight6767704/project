const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const numVisibleItems = 4; // Set the number of visible logos
const animationDuration = 3000; // Animation duration in milliseconds

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = carouselItems[0].offsetWidth;
  const translateX = -currentIndex * (itemWidth + 16); // 16 is the margin-right
  carousel.style.transform = `translateX(${translateX}px)`;
}

function moveCarousel() {
  currentIndex++;
  if (currentIndex + numVisibleItems > carouselItems.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Use requestAnimationFrame for smoother animation
let lastTimestamp = null;
function animate(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }
  const deltaTime = timestamp - lastTimestamp;
  if (deltaTime >= animationDuration) {
    moveCarousel();
    lastTimestamp = timestamp;
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Ensure the number of visible logos is consistent
carousel.style.width = `calc((100% / ${numVisibleItems}) * ${carouselItems.length})`;
carouselItems.forEach((item) => {
  item.style.width = `calc(100% / ${carouselItems.length})`;
});

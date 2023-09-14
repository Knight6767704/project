// script.js
// Automatically scroll the carousel
setInterval(() => {
    const carousel = document.querySelector('.carousel');
    const firstLogo = carousel.querySelector('.logo');
    carousel.appendChild(firstLogo);
}, 5000); // Adjust the time interval as needed (in milliseconds)

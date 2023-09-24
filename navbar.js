const toggleButton = document.getElementById("toggleButton");
const navbar = document.getElementById("navbar-sticky");

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== toggleButton && !navbar.contains(target)) {
        navbar.classList.add("hidden");
    }
});

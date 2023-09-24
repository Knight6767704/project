const toggleButton = document.getElementById("toggleButton");
const navbar = document.getElementById("navbar-sticky");

function toggleNavbar() {
    navbar.classList.toggle("hidden");
}

function closeNavbar() {
    navbar.classList.add("hidden");
}

toggleButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click propagation to document
    toggleNavbar();
});

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== toggleButton && !navbar.contains(target)) {
        closeNavbar();
    }
});

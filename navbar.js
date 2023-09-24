document.addEventListener('DOMContentLoaded', function () {
  // Get references to your navbar and toggle button elements
  const navbar = document.getElementById('navbar-sticky');
  const toggleButton = document.getElementById('toggleNavbar');

  // Function to close the navbar
  function closeNavbar() {
    navbar.classList.remove('md:block');
    navbar.setAttribute('aria-expanded', 'false');
    // Add any additional code to hide or close the navbar as needed
  }

  // Event listener to close navbar when clicking outside
  document.addEventListener('click', function (event) {
    // Check if the click target is not inside the navbar or toggle button
    if (!navbar.contains(event.target) && event.target !== toggleButton) {
      closeNavbar();
    }
  });

  // Event listener to toggle the navbar when the button is clicked
  toggleButton.addEventListener('click', function () {
    const expanded = navbar.getAttribute('aria-expanded');
    if (expanded === 'true') {
      closeNavbar();
    } else {
      navbar.classList.add('md:block');
      navbar.setAttribute('aria-expanded', 'true');
    }
  });
});

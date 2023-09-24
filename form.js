document.getElementById('myForm').addEventListener('submit', function (event) {
    const form = event.target;

    // Check if any required fields are empty
    const requiredInputs = form.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(function (input) {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all required fields.');
    }
});

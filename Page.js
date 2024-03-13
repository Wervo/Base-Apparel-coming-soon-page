// Get the email input and error message elements
const emailInput = document.getElementById('emailInput');
const errorMessage = document.querySelector('.error');

// Function to validate email
function validateEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Event listener for input change
emailInput.addEventListener('input', function() {
    // Check if the email is valid
    if (validateEmail(emailInput.value)) {
        // Hide the error message if email is valid
        errorMessage.classList.add('hidden');
    } else {
        // Show the error message if email is invalid
        errorMessage.classList.remove('hidden');
    }
});

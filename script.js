const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement; // Taking the parent element of the input
    formControl.className = 'form-control error'; // Adding the error class to display red border
    const small = formControl.querySelector('small'); // Selecting the small tag for error message
    small.innerText = message; // Setting the custom error message
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; // Adding the success class to display green border
}

// Check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get field name with proper formatting
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);

    if (email.value.trim() !== '' && !isValidEmail(email.value.trim())) {
        showError(email, 'Email is not valid');
    }
});

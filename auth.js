// DOM Elements
const signInToggle = document.getElementById('signInToggle');
const signUpToggle = document.getElementById('signUpToggle');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

const signInEmailInput = document.getElementById('signInEmail');
const signInPasswordInput = document.getElementById('signInPassword');
const signUpEmailInput = document.getElementById('signUpEmail');
const signUpPasswordInput = document.getElementById('signUpPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');

const signInEmailError = document.getElementById('signInEmailError');
const signInPasswordError = document.getElementById('signInPasswordError');
const signUpEmailError = document.getElementById('signUpEmailError');
const signUpPasswordError = document.getElementById('signUpPasswordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const signInMessage = document.getElementById('signInMessage');
const signUpMessage = document.getElementById('signUpMessage');

// Function to toggle between Sign In and Sign Up forms
function toggleForms(formToShow) {
    if (formToShow === 'signIn') {
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
        signInToggle.classList.add('active');
        signUpToggle.classList.remove('active');
    } else {
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
        signUpToggle.classList.add('active');
        signInToggle.classList.remove('active');
    }
    // Clear messages and errors when switching forms
    clearMessagesAndErrors();
}

// Event listeners for toggle buttons
signInToggle.addEventListener('click', () => toggleForms('signIn'));
signUpToggle.addEventListener('click', () => toggleForms('signUp'));

// Function to toggle password visibility
function togglePasswordVisibility(id, iconElement) {
    const passwordInput = document.getElementById(id);
    const icon = iconElement.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter, one number
    const re = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}

function displayError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = '';
}

function displayMessage(element, message, isSuccess = true) {
    element.textContent = message;
    element.style.color = isSuccess ? '#22c55e' : '#ef4444'; // Green for success, red for error
}

function clearMessagesAndErrors() {
    clearError(signInEmailError);
    clearError(signInPasswordError);
    clearError(signUpEmailError);
    clearError(signUpPasswordError);
    clearError(confirmPasswordError);
    displayMessage(signInMessage, '', true); // Clear message
    displayMessage(signUpMessage, '', true); // Clear message
}

// Sign In Form Validation and Submission
signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    clearMessagesAndErrors(); // Clear previous messages and errors

    const email = signInEmailInput.value.trim();
    const password = signInPasswordInput.value.trim();
    let isValid = true;

    if (!validateEmail(email)) {
        displayError(signInEmailError, 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 1) { // Simple check for sign-in, assuming password strength is handled on sign-up
        displayError(signInPasswordError, 'Password cannot be empty.');
        isValid = false;
    }

    if (isValid) {
        // Simulate API call or authentication logic
        displayMessage(signInMessage, 'Signing in...', true);
        setTimeout(() => {
            // In a real application, you'd send data to a server
            console.log('Sign In Attempt:', { email, password });
            displayMessage(signInMessage, 'Sign In successful! Redirecting...', true);
            // Redirect to main page or dashboard
            window.location.href = 'index.html'; // Or your main app page
        }, 1500);
    } else {
        displayMessage(signInMessage, 'Please correct the errors above.', false);
    }
});

// Sign Up Form Validation and Submission
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    clearMessagesAndErrors(); // Clear previous messages and errors

    const email = signUpEmailInput.value.trim();
    const password = signUpPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    let isValid = true;

    if (!validateEmail(email)) {
        displayError(signUpEmailError, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!validatePassword(password)) {
        displayError(signUpPasswordError, 'Password must be at least 8 characters, include 1 uppercase letter and 1 number.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        displayError(confirmPasswordError, 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        // Simulate API call or registration logic
        displayMessage(signUpMessage, 'Registering...', true);
        setTimeout(() => {
            // In a real application, you'd send data to a server
            console.log('Sign Up Attempt:', { email, password });
            displayMessage(signUpMessage, 'Registration successful! You can now sign in.', true);
            // Optionally switch to sign-in form after successful registration
            toggleForms('signIn');
        }, 2000);
    } else {
        displayMessage(signUpMessage, 'Please correct the errors above.', false);
    }
});

// Optional: Real-time validation as user types
signInEmailInput.addEventListener('input', () => {
    if (!validateEmail(signInEmailInput.value.trim())) {
        displayError(signInEmailError, 'Invalid email format.');
    } else {
        clearError(signInEmailError);
    }
});

signUpEmailInput.addEventListener('input', () => {
    if (!validateEmail(signUpEmailInput.value.trim())) {
        displayError(signUpEmailError, 'Invalid email format.');
    } else {
        clearError(signUpEmailError);
    }
});

signUpPasswordInput.addEventListener('input', () => {
    if (!validatePassword(signUpPasswordInput.value.trim())) {
        displayError(signUpPasswordError, 'Min 8 chars, 1 uppercase, 1 number.');
    } else {
        clearError(signUpPasswordError);
    }
    if (signUpPasswordInput.value.trim() !== confirmPasswordInput.value.trim() && confirmPasswordInput.value.trim() !== '') {
        displayError(confirmPasswordError, 'Passwords do not match.');
    } else {
        clearError(confirmPasswordError);
    }
});

confirmPasswordInput.addEventListener('input', () => {
    if (signUpPasswordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        displayError(confirmPasswordError, 'Passwords do not match.');
    } else {
        clearError(confirmPasswordError);
    }
});

// Initial animation for the container
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.auth-container').classList.add('fade-in');
});

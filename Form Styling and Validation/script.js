// script.js
document.getElementById('userForm').addEventListener('submit', function(event) {
    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});

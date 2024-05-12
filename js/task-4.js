'use strict'

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {};
    const inputs = loginForm.elements;

    for (let input of inputs) {
        if (input.type !== 'submit' && !input.value.trim()) {
            alert('All form fields must be filled in');
            return;
        }
        formData[input.name] = input.value.trim();
    }

    if (!isValidEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (formData.password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    console.log(formData);
    loginForm.reset();
});

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
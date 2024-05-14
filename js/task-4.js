'use strict'

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {};
    let isEmptyField = false;

    for (let input of loginForm.elements) {
        if (input.name && input.type !== 'submit') {
            const trimmedValue = input.value.trim();
            if (!trimmedValue) {
                isEmptyField = true;
                break;
            }
            formData[input.name] = trimmedValue;
        }
    }

    if (isEmptyField) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formData);
    loginForm.reset();
});
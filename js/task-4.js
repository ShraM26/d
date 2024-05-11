'use strict'

// const registerForm = document.querySelector('.login-form');

// registerForm.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const { login, password } = event.target.elements;
//     const email = login.value;
//     const userPassword = password.value;
    
//     if (email.trim() === "" || userPassword.trim() === "") {
//         alert('Please fill in all the fields.');
//         return;
//     }

//     console.log(`Email: ${email}, Password: ${userPassword}`);
//     event.target.reset();
// });
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {};
    const inputs = loginForm.elements;

    for (let input of inputs) {
        if (input.type !== 'submit') {
            formData[input.name] = input.value.trim();
            if (!formData[input.name]) {
                alert('All form fields must be filled in');
                return;
            }
        }
    }

    console.log(formData);
    loginForm.reset();
});
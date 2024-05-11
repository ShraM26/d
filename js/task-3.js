'use strict'
 
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () =>  {
    const inputName = nameInput.value.trim();
    nameOutput.textContent = inputName === '' ? 'Anonymous' : inputName;
});


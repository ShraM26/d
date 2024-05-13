'use strict'

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  document.querySelector('.change-color').addEventListener('click', function() {
    const body = document.body;
    const newColor = getRandomHexColor(); 
    body.style.backgroundColor = newColor; 

    const colorSpan = document.querySelector('.color');
    colorSpan.textContent = newColor; 
  });


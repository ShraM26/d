'use strict'

const totalCategories = document.querySelectorAll('#categories .item');

     console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(category => {
    
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;
  
    console.log(`Category: ${categoryName}`);
    console.log(`Number of items: ${categoryItems}`);
});



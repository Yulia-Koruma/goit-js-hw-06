const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
const lengthCategoriesEl = allCategoriesEl.length;
console.log(`Number of categories: ${lengthCategoriesEl}`);

allCategoriesEl.forEach(categoriesEl => { 
    console.log('Category :', categoriesEl.firstElementChild.textContent)
    console.log('Elements :', categoriesEl.lastElementChild.children.length)
})
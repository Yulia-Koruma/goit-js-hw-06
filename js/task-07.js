// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('#font-size-control');

const textSpan = document.querySelector('#text');

textSpan.style.fontSize = input.value + 'px';
input.addEventListener('input', (event) => {
     textSpan.style.fontSize = event.target.value + 'px'
})





const textInput = document.querySelector('#font-size-control');
console.log(textInput);

const textSpan = document.querySelector('#text');
console.log(textSpan);
textSpan.style.fontSize = textInput.value + 'px';
textInput.addEventListener('input', (event) => {
     textSpan.style.fontSize = event.target.value + 'px'
})



const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInput);

function onInput(event) {
    if (inputText.value.length === Number(inputText.dataset.length)) {
        inputText.classList.add('valid');
    } else {
        inputText.classList.add('invalid');
    }
};



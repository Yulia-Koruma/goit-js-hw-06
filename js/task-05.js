const formInputRef = document.querySelector("#name-input");
const formOutputRef = document.querySelector("#name-output");

formInputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (formInputRef.value === '') {
        formOutputRef.textContect = 'Anonymous';
    }
    else {
        formOutputRef.textContent = event.currentTarget.value;
    }
}


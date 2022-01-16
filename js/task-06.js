const textInput = document.querySelector('#validation-input');
const inputLength = document.querySelector('input[data-length="6"]');
const initialInputLength = inputLength.dataset.length;


textInput.addEventListener("blur", (event) => {
   
    if (event.target.value.length === initialInputLength) {
        textInput.classList.add('valid')
    }
    else {
        textInput.classList.add('invalid')
    }
});




// function onInputBlur(event) {
//     if (event.target.value.length < initialInputLength || event.target.value.length > initialInputLength) {
//         textInput.classList.add('valid');
//          textInput.classList.remove('valid');
//     }
//     else textInput.classList.add('invalid');
//         textInput.classList.remove('valid');
// };








// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
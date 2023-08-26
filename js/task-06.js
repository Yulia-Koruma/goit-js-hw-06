// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');
const totalLength = document.querySelector('input[data-length="6"]');
const initialTotalLength = totalLength.dataset.length;

input.addEventListener('blur', event => {
	const text = event.target.value;

	if (text.length < initialTotalLength || text.length > initialTotalLength) {
		input.classList.add('invalid');
		input.classList.remove('valid');
	} else {
		input.classList.add('valid');
		input.classList.remove('invalid');
	}
});


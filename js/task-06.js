const inputEl = document.querySelector('#validation-input');
const totalLength = document.querySelector('input[data-length="6"]');
const initialTotalLength = totalLength.dataset.length;

inputEl.addEventListener('blur', event => {
	const text = event.target.value;

	if (text.length < initialTotalLength || text.length > initialTotalLength) {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	} else {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	}
});
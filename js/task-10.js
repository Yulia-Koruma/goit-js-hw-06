function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const dataCreateBtn = document.querySelector('button[data-create]');
const dataDestroyBtn = document.querySelector('button[data-destroy]');
const dataBoxes = document.querySelector('#boxes');

dataCreateBtn.addEventListener('click', getAmountAndSetBoxes);
dataDestroyBtn.addEventListener('click', destroyBoxes);

function getAmountAndSetBoxes() {
	const amount = Number(document.querySelector('#controls input').value);

	createBoxes(amount);
}

let initialSize = 20;

function createBoxes(amount) {
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < amount; i++) {
		initialSize += 10;
		const dataItem = document.createElement('div');
		dataItem.style.backgroundColor = getRandomHexColor();
		dataItem.style.width = `${initialSize}px`;
		dataItem.style.height = `${initialSize}px`;
		fragment.append(dataItem);
	}
	initialSize = 20;
	dataBoxes.append(fragment);
}

function destroyBoxes() {
	dataBoxes.innerHTML = '';
}


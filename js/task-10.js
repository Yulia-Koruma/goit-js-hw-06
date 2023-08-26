
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
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

let initialSize = 30;

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


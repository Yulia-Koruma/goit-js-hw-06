function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const colorOutput = document.querySelector('.color');
const colorInput = document.querySelector('.change-color');

colorInput.addEventListener('click', onTargetBtn);

function onTargetBtn() {
	const randomColors = getRandomHexColor();
	bodyColor.style.backgroundColor = randomColors;
	colorOutput.textContent = randomColors;
}
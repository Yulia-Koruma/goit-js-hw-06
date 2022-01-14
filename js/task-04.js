const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

incrementBtnRef.addEventListener('click', () => {
	counterValue.increment();
	valueRef.textContent = counterValue.value;
});

decrementBtnRef.addEventListener('click', () => {
	counterValue.decrement();
	valueRef.textContent = counterValue.value;
});

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
	counterValue.increment();
    value.textContent = counterValue.value;
    console.log("click");
});

decrementBtn.addEventListener('click', () => {
	counterValue.decrement();
    value.textContent = counterValue.value;
    console.log("click");
});


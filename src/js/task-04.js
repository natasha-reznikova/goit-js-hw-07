// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса




const counterValue = document.getElementById('value');
const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');

let value = 0;
function decreaseValue() {
  value -= 1;
  counterValue.textContent = value;
}
function increaseValue() {
  value += 1;
  counterValue.textContent = value;
}
decrBtn.addEventListener('click', decreaseValue);
incrBtn.addEventListener('click', increaseValue);



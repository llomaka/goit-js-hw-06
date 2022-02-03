function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputFieldRef = document.querySelector('input');
const createCollectionButton = document.querySelector('[data-create]');
const destroyCollectionButton = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
let boxesQuantity = 0;

// const errorAlert = function (amount) { 
//   alert(`Невозможно создать коллекцию из ${amount} элементов. Введите число от 1 до 100.`);
// };

const destroyBoxes = function() { 
  boxesRef.innerHTML = '';
  console.log('Коллекция элементов очищена');
};

createCollectionButton.addEventListener('click', (event) => {
  event.preventDefault();
  boxesQuantity = event.currentTarget.previousElementSibling.value;
  if (boxesQuantity <= 0 || boxesQuantity > 100) {
    boxesRef.insertAdjacentHTML("afterbegin", `Невозможно создать коллекцию из ${boxesQuantity} элементов. Введите число от 1 до 100.<br>`);
    inputFieldRef.value = '';
    return;
  }
  let markup = '';
  for (let i = 0; i < boxesQuantity; i += 1) {
    markup += `<div style="width: ${30 + i*10}px; height: ${30 + i*10}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxesRef.insertAdjacentHTML("beforeend", markup);
  inputFieldRef.value = '';
  console.log(`Создана коллекция из ${boxesQuantity} элементов`);
  // event.currentTarget.previousElementSibling.reset();
});

destroyCollectionButton.addEventListener('click', destroyBoxes);
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
  
const countBoxesQuantity=function() {
  if (inputFieldRef.value.length !== 0) {
    boxesQuantity = inputFieldRef.value.trim();
    console.log(boxesQuantity);
    return boxesQuantity;
  }
};

console.log(countBoxesQuantity());

inputFieldRef.addEventListener("input", countBoxesQuantity);
boxesQuantity = inputFieldRef.value;
console.log(boxesQuantity);

const createBoxes = function (amount) { 
  console.log(amount);
  const boxesArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const boxElement = document.createElement('div');
    boxElement.style.width = (30 + i * 10) + 'px';
    boxElement.style.height = (30 + i * 10) + 'px';
    boxElement.style.color = getRandomHexColor();
    console.log(boxElement);
    boxesArray.push(boxElement);
  }
  console.log(boxesArray);
  boxesRef.insertAdjacentHTML("beforeEnd", boxesArray.join(''));
  inputFieldRef.textContent = '';
  console.log('Коллекция элементов создана');
};

const destroyBoxes = function() { 
  boxesRef.innerHTML = '';
  console.log('Коллекция элементов очищена');
};

console.log(boxesQuantity);
createCollectionButton.addEventListener('click', createBoxes(boxesQuantity));
destroyCollectionButton.addEventListener('click', destroyBoxes);
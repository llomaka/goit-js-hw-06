function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const span = document.querySelector('.color');

function changeBodyColor() {
  const backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;
  span.textContent = backgroundColor;
}

changeColorButton.addEventListener('click', changeBodyColor);

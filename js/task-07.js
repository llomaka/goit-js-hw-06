// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const rangeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = rangeInputEl.value + "px";

rangeInputEl.addEventListener('input', () => {
    textEl.style.fontSize = rangeInputEl.value + "px";
    console.log(textEl.style.fontSize);
});
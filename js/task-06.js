const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    if (textInput.value.length === 0) { return;}
    else if (textInput.value.length > textInput.dataset.length) {
        textInput.classList.add('invalid');
    } else {
        textInput.classList.add('valid');
    }
});

textInput.addEventListener("focus", () => {
    textInput.classList.remove('valid', 'invalid');
});

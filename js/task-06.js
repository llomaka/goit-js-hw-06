const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    if (textInput.value.length === 0) { return;}
    else if (textInput.value.length ===6) {
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
    }
});

textInput.addEventListener("focus", () => {
    textInput.classList.remove('valid', 'invalid');
});

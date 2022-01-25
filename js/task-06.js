const textInput = document.querySelector("#validation-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.length !== 0) {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = 'Anonymous';
    }
});

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const magic = () => {
  inputRef.value
    ? (outputRef.textContent = inputRef.value)
    : (outputRef.textContent = "незнайомець");
};

inputRef.addEventListener("input", magic);

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const printInput = () => {
  inputRef.value
    ? (outputRef.textContent = inputRef.value)
    : (outputRef.textContent = "незнайомець");
};

inputRef.addEventListener("input", printInput);

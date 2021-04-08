const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const magic = () => {
  if (inputRef.value) {
    outputRef.textContent = inputRef.value;
  } else outputRef.textContent = "незнайомець";
};

inputRef.addEventListener("input", magic);

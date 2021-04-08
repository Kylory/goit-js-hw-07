const inputRef = document.querySelector("#validation-input");
const dataLength = document.querySelector("input[data-length]").dataset.length;

const checkInput = () => {
  if (inputRef.value.length == dataLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", checkInput);

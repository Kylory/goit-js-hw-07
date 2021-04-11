let boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");
const renderButtonRef = document.querySelector('button[data-action="render"]');
const destroyButtonRef = document.querySelector(
  'button[data-action="destroy"]'
);

function createBoxes() {
  if (inputRef.value > 0) {
    const divBox = document.createElement("div");
    divBox.setAttribute("id", "boxes");

    const randomColor = () => {
      const rgbNum = () => Math.floor(Math.random() * 256);
      const r = rgbNum();
      const g = rgbNum();
      const b = rgbNum();
      return `rgb(${r},${g},${b})`;
    };

    for (let i = 30; i < inputRef.value * 10 + 30; i += 10) {
      const boxElement = `<div style = width:${i}px;height:${i}px;background-color:${randomColor()};margin:10px></div>`;
      divBox.insertAdjacentHTML("beforeend", boxElement);
    }
    boxesRef.replaceWith(divBox);
    boxesRef = document.querySelector("#boxes");
  }
}

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
  inputRef.value = "";
};

renderButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeTextSize = () => textRef.style.fontSize = `${sizeControlRef.value}px`;
sizeControlRef.addEventListener("input", changeTextSize);
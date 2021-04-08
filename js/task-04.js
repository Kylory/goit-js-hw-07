const counterRef = document.querySelector("#value");
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = +counterRef.textContent;

const onIncrementButtonClick = () => {
  counterRef.textContent = counterValue += 1;
};

const onDecrementButtonClick = () => {
  counterRef.textContent = counterValue -= 1;
};

decrementButtonRef.addEventListener("click", onDecrementButtonClick);
incrementButtonRef.addEventListener("click", onIncrementButtonClick);

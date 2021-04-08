const counterRef = document.querySelector("#value");
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = +counterRef.textContent;

const onIncrementButtonClick = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};

const onDecrementButtonClick = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};

decrementButtonRef.addEventListener("click", onDecrementButtonClick);
incrementButtonRef.addEventListener("click", onIncrementButtonClick);

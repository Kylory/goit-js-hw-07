const counterRef = document.querySelector("#value");
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);
const resetCounterButtonRef = document.querySelector(
  'button[data-action="reset-counter"]'
);

const counter = {
  value: +counterRef.textContent,
  onIncrementButtonClick() {
    this.value += 1;
    counterRef.textContent = this.value;
  },
  onDecrementButtonClick() {
    this.value -= 1;
    counterRef.textContent = this.value;
  },
  onResetCounterButtonClick() {
    this.value = 0;
    counterRef.textContent = this.value;
  },
};

incrementButtonRef.addEventListener(
  "click",
  counter.onIncrementButtonClick.bind(counter)
);
decrementButtonRef.addEventListener(
  "click",
  counter.onDecrementButtonClick.bind(counter)
);
resetCounterButtonRef.addEventListener(
  "click",
  counter.onResetCounterButtonClick.bind(counter)
);

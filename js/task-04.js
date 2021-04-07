const counter = document.querySelector('#value')
let counterValue = +(counter.textContent);

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('button[data-action="increment"]');

const onDecrementButtonClick = () => decrement();
const onIncrementButtonClick = () => increment();

decrementButtonRef.addEventListener('click', onDecrementButtonClick);
incrementButtonRef.addEventListener('click', onIncrementButtonClick);
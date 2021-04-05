const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsListRef = document.querySelector("#ingredients");

const makeListElement = (ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;

  return listElement;
};

const elementsList = ingredients.map(makeListElement);

ingredientsListRef.append(...elementsList);

const categoriesRef = document.querySelectorAll(".item");
const titlesRef = document.querySelectorAll(".item h2");

const printCategoriesQuantity = (categories) =>
  console.log(`У списку ${categories.length} категорії.`);

const printCategoriesInfo = (titles) =>
  titles.forEach((title) =>
    console.log(
      `Категорія: ${title.textContent}\nКількість елементів: ${title.nextElementSibling.children.length}`
    )
  );

printCategoriesQuantity(categoriesRef);
printCategoriesInfo(titlesRef);

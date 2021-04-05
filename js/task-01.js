const ulCategories = document.querySelectorAll('.item');
const titles = document.querySelectorAll('.item h2');

console.log(`У списку ${ulCategories.length} категорії.`);
for (const title of titles) {
    console.log(`Категорія: ${title.textContent}`);
    console.log(`Кількість елементів: ${title.nextElementSibling.children.length}`);
}
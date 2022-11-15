const categoriesListRef = document.querySelector("#categories");
const allCategoriesItemRef = categoriesListRef.children;

function amountAllCategoriesItem(array) {
  return `Number of categories: ${array.length}`;
}

console.log(amountAllCategoriesItem(allCategoriesItemRef));

Array.from(allCategoriesItemRef).forEach((elem) => {
  console.log(`Categories: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

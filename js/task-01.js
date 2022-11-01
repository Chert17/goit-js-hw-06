const categoriesListRef = document.querySelector("#categories");

const allCategoriesItemRef = categoriesListRef.children;

function amountAllCategoriesItem(array) {
  return `Number of categories: ${array.length}`;
}

console.log(amountAllCategoriesItem(allCategoriesItemRef));

// for (let i = 0; i < allCategoriesItemRef.length; i++) {
//   console.log(allCategoriesItemRef[i].firstElementChild.textContent);
//   console.log(allCategoriesItemRef[i].lastElementChild.children.length);
// }

Array.from(allCategoriesItemRef).forEach((elem) => {
  console.log(elem.firstElementChild.textContent);
  console.log(elem.lastElementChild.children.length);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  box: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", (event) => {
  createBoxes(refs.input.value);
});

refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + 10 * i;
    markup += `<div style = "background: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
  }
  refs.box.innerHTML = markup;
}

function destroyBoxes() {
  refs.box.innerHTML = "";
  refs.input.value = "";
}

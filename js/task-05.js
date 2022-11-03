const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputValue);

function onInputValue(event) {
  refs.text.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.text.textContent = "Anonymous";
  }
}

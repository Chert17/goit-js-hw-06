const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", fontSizeControl);

function fontSizeControl(event) {
  text.style.fontSize = event.target.value + "px";
}

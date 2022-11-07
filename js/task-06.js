const input = document.querySelector("#validation-input");
const lengthInput = Number(input.dataset.length);

input.addEventListener("blur", onVerificationInput);

function onVerificationInput(event) {
  if (event.currentTarget.value.length === lengthInput) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
    return;
  }
  event.target.classList.add("invalid");
}

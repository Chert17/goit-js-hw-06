const input = document.querySelector("#validation-input");
const lengthInput = Number(input.dataset.length);

input.addEventListener("blur", onVerificationInput);

function onVerificationInput(event) {
  event.currentTarget.value.length <= lengthInput
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}

//   if (event.currentTarget.value.length <= lengthInput) {
//     return input.classList.add("valid");
//   }
//   return input.classList.add("invalid");

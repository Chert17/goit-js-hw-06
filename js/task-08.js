const form = document.querySelector(".login-form");

form.addEventListener("submit", onUserForm);

function onUserForm(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements;

  if (inputValue.email.value === "" || inputValue.password.value === "") {
    return alert("all fields must be hidden");
  }

  console.log(
    `email:${inputValue.email.value} password: ${inputValue.password.value}`
  );
  event.currentTarget.reset();
}

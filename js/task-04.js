const decr = document.querySelector("[data-action=decrement]");
const incr = document.querySelector("[data-action=increment]");
const valEl = document.querySelector("#value");

let value = 0;

incr.addEventListener("click", (event) => {
  value += 1;
  valEl.textContent = value;
});

decr.addEventListener("click", (event) => {
  value -= 1;
  valEl.textContent = value;
});

// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// decr.addEventListener("click", function () {
//   counter.decrement();
//   valEl.textContent = counter.value;
// });

// incr.addEventListener("click", function () {
//   counter.increment();
//   valEl.textContent = counter.value;
// });

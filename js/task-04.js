const refs = {
  decr: document.querySelector("[data-action=decrement]"),
  incr: document.querySelector("[data-action=increment]"),
  valEl: document.querySelector("#value"),
};

let value = 0;

refs.incr.addEventListener("click", () => {
  value += 1;
  refs.valEl.textContent = value;
});

refs.decr.addEventListener("click", () => {
  value -= 1;
  refs.valEl.textContent = value;
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

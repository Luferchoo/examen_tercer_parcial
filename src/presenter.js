import sumar from "./sumador";

const monto1 = document.querySelector("#monto");
const second = document.querySelector("#efectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(monto1.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

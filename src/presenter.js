import sumar from "./sumador";

const monto1 = document.querySelector("#monto");
const efectivo1 = document.querySelector("#efectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(monto1.value);
  const secondNumber = Number.parseInt(efectivo1.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

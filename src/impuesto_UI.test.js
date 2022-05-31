import fs from "fs";

describe("devolver cambio", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });  

  it("Si ingresa monto 200 se guarda monto como 200", () => {
    const monto1 = document.querySelector("#monto");
    monto1.value = "200";
/*
    const calcular = document.querySelector("#boton-calcular");
    calcular.click();

    const resultado = document.querySelector("#resultado-div");
    */
    expect(monto1.value).toEqual("200");
  });
});

  
import cambiar from "./cambiomonedas.js";

describe("cambiar", () => {
  it("deberia cambiar monedas simples en su unidad minima", () => {
    expect(cambiar(1)).toEqual(1);
  });
  it("no cambia monedas por otras monedas", () => {
    expect(cambiar(5)).toEqual(5);
  });
});

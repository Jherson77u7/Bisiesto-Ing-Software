import esBisiesto from "./esBisiesto.js";

describe("Es bisiesto", () => {
  it("Todo numero divisible entre 400 son bisiestos", () => {
    const result = esBisiesto(2000)
    expect(result).toEqual(true);
  });
  it("Todos los años divisibles por 100 pero no por 400 NO son bisiestos", () => {
    const result = esBisiesto(1700)
    expect(result).toEqual(false);
  });
  it("Todos los años divisibles por 100 pero no por 400 NO son bisiestos", () => {
    const result = esBisiesto(2008)
    expect(result).toEqual(true);
  });
});


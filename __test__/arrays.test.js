import { arrayFruits, arrayColors } from "../arrays";

describe("Comprobando si existe un elemento", () => {
  test("¿tiene una banana? ", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("No contiene un platano ", () => {
    expect(arrayFruits()).not.toContain("platano");
  });
  test("Comprobando la longitud del arreglo ", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
});

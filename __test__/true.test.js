import { isNull, isTrue } from "../true";
import { isFalse, isUndefined } from "../true";

describe("Probar resultados nulos", () => {
  test("Null ", () => {
    expect(isNull()).toBeNull();
  });
});

describe("Probar resultadsos Verdaderos", () => {
  test("True ", () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("Probar resultados Falso", () => {
  test("false ", () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe("Probar resultados Undefined", () => {
  test("Undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("Comprobar cadena de texto", () => {
  const text = "un bonito texto";
  test("debe contener el siguiente texto", () => {
    expect(text).toMatch(/bonito/);
  });
  test('No contiene el siguiente texto', () => {
      expect(text).not.toMatch(/santiago/);
      
  });
});

describe("Comparadores comunes", () => {
  const user = {
    name: "Giovanni Jose",
    lastName: "Di Rosa",
  };
  const user2 = {
    name: "Giovanni",
    lastName: "Di Rosa",
  };
  test("igualdad de elementos ", () => {
    expect(user).toEqual(user2);
  });
  test("No son exactamente iguales", () => {
    expect(user).not.toEqual(user2);
  });
});

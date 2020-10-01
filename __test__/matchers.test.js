describe("Comparadores comunes", () => {
  const user = {
    name: "Giovanni",
    lastName: "Di Rosa",
  };
  const user2 = {
    name: "Giovanni",
    lastName: "Di Rosa",
  };
  test('igualdad de elementos ', () => {
      expect(user).toEqual(user2);
      
  });
});

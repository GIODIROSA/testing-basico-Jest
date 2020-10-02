import { getCharacter } from "../snaphot";
import rick from "../rick.json";

describe("Es hora de las instaneas", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test("Siempre fallara la instantanea", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };
    expect(user).toMatchSnapshot();
  });

  test("Tenemos una excepsion del codigo", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Oscar Barajas",
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});

//para actualizar el snapshot... usar el comando jest -u

import { getCharacter } from "../snaphot";
import rick from "../rick.json";

describe("Es hora de las instaneas", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
});

//para actualizar el snapshot... usar el comando jest -u
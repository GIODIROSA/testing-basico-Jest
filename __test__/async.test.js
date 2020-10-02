import { getDataFromApi } from "../promise";

describe("Probar asincrono y espera", () => {
  test("Realizar una peticion a una api", async () => {
    const api = "https://rickandmortyapi.com/api/character/";
    const getRicky = "https://rickandmortyapi.com/api/character/1";
    await getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromApi(getRicky).then((data) => {
      expect(data.name).toEqual("Rick Sanchez");
    });
  });
  test("Realizando una peticion a una api con error", async () => {
    const apiError = "http://httpstat.us/404";
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(
      Error("Request failed with status code 404")
    );
  });
  test('Resuelve un hola',  async() => {
      await expect(Promise.resolve('hola')).resolves.toBe('hola');
      await expect(Promise.reject('error')).rejects.toBe('error');
      
  });
});

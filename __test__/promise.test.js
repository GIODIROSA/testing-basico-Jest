import { getDataFromApi } from "../promise";

describe("Probando promesas", () => {
  test("Realizando una peticion a una Api", (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then((data) => {
      // console.log(data);
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
  test("Resolviendo un hola!", () => {
    return expect(Promise.resolve("Hola!")).resolves.toBe("Hola!");
  });
  test('Rechaza con un error', () => {
      return expect(Promise.reject("error")).rejects.toBe('error')
      
  });
});





// sugerencia de la comunidad
/*
import {
    getDataFromApi
  } from '../promise';
  
  describe( 'Probando promesas', () => {
  
    const url = 'https://rickandmortyapi.com/api/character';
    test( 'Realizando una peticion a un API', async ( done ) => {
      const respuesta = await getDataFromApi( url );
      const arreglo = respuesta.data.results;
      // expect( arreglo ).toHaveLength( 20 );
      expect( arreglo.length ).toBeGreaterThan( 21 );
      done()
    } );
  } );*/

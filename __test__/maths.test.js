import { sumar, multiplicar, restar, dividir } from '../math'

describe('calculos matematicos', () => {
    //SUMAR
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);

    });
    //RESTAR
    test('Prueba de restar', () => {
        expect(restar (5,3)).toBe(2);
    });
    //MULTIPLICAR
    test('Prueba de multiplicar', () => {
        expect(multiplicar (2,2)).toBe(4);

    });
    //DIVIDIR
    test('Prueba de dividir', () => {
        expect(dividir(2,2)).toBe(1);
    })

});


/*
 Desafio FizzBuzz
    Escreva uma lib que receba um número e:
    Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
    Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
    Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
    Se não for múltiplo de nada, retorna o número

*/

import { expect } from 'chai'; 
import FizzBuzz from '../src/js/fizzbuzz/FizzBuzz';

describe('FizzBuzz Main', () => {

    it('sould return "Fizz" when multiple of 3',()=>{
        expect(FizzBuzz(3)).to.be.equal('Fizz');
        expect(FizzBuzz(6)).to.be.equal('Fizz');
    })

    it('sould return "Buzz" when multiple of 5',()=>{
        expect(FizzBuzz(5)).to.be.equal('Buzz');
        expect(FizzBuzz(10)).to.be.equal('Buzz');
    })

    it('sould return "FizzBuzz" when multiple of 3 and 5',()=>{
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    })

    it('sould return the number  when non-multiple',()=>{
        expect(FizzBuzz(1)).to.be.equal(1);
    })

})
import { expect } from 'chai'; 
import { add, subtract, multiply, divide, evenNums } from '../src/js/math/operations';


describe('Operations', () => {

    describe('Smoke test', () => {

        it('should exist the method "add"', () => {
            expect(add).to.be.exist;
            expect(add).to.be.a('function');
        })

        it('should exist the method "subtract"', () => {
            expect(subtract).to.be.exist;
            expect(subtract).to.be.a('function');
        })

        it('should exist the method "multiply"', () => {
            expect(multiply).to.be.exist;
            expect(multiply).to.be.a('function');
        })

        it('should exist the method "divide"', () => {
            expect(divide).to.be.exist;
            expect(divide).to.be.a('function');

        })

        it('should exist the method "evenNums"', () => {
            expect(evenNums).to.be.exist;
            expect(evenNums).to.be.a('function');
        })
    })

    describe('Method add', () => {

        it('should return 4 when add(2,2)', () => {

            expect(add(2, 2)).to.be.equal(4)
        })

    })

    describe('Method subtract', () => {

        it('should return 4 when subtract(6,2)', () => {

            expect(subtract(6, 2)).to.be.equal(4)
        })

        it('should return -4 when subtract(6,10)', () => {

            expect(subtract(6, 10)).to.be.equal(-4)
        })

    })

    describe('Method multiply', () => {

        it('should return 4 when multiply(2,2)', () => {

            expect(multiply(2, 2)).to.be.equal(4)
        })

    })
 
    describe('Method divide', () => {

        it('should return 4 when divide(8,2)', () => {

            expect(divide(8, 2)).to.be.equal(4)
        })

        it('should return "Não e possivel divisivel por zero!" when divide by 0', () => {

            expect(divide(8, 0)).to.be.equal('Não e possivel divisivel por zero!')
        })

    })
    
    describe('Method evenNums', () => {

        it('should return 2,4 when evenNums([1,2,3,4,5])', () => {


            expect(evenNums([1, 2, 3, 4, 5])).to.be.includes(2, 4)
        })


    })
    
})
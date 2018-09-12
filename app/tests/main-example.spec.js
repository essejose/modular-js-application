import { expect } from 'chai';

describe.skip('Main', function () {

    var arr;

    //Hooks
    before(function () {
        //criar conjunto de dados
    })
    after(function () {
        //apagar conjunto de dados
    })
    beforeEach(function () {
        arr = [1, 2, 3];
    })
    afterEach(function () {

    })

    describe('Method A', function () {
        context.skip('Case 1 ', function () {
            it('should happen nothing', function () {

                throw new Error('ERROR')
            })
        })

        context('Case 2 ', function () {

            it('should be an array', function () {
                expect(arr).to.be.a('array')
            })

            it('should have a size 4 when push another value to the array', function () {
                arr.push(4);
                expect(arr).to.have.lengthOf(4);
            })

            it('should remove the value 3 when use pop in the array', function () {
                arr.pop();
                expect(arr).to.not.include(3);
            })

            it('should  return true when pop 3 form the array', function () {
                arr.pop()
                expect(arr).to.not.include(3);
            })

            it('should have a size of 2 when pop a value form the array', function () {
                arr.pop();
                expect(arr).to.have.lengthOf(2);

            })


        })

    });
    describe.skip('Method B', function () {
        context('Case 1 ', function () {
            it('should happen nothing', function () {

            })
        })
    });
});
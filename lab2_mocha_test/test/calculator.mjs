import { assert } from 'chai' 
//was being really stupid so i had to induvidually import all of them one by one
import { add, sub, mul, div } from '../app/calculator.js'; 

describe('Calc tests', () => {

    describe("Addition", () => { 
        it("add(5, 5) excpected result 10 PASS", () => { 
            assert.equal(add(5, 5), 10) 
        }) 
        it("add(5, 5) excpected result 100 FAIL", () => { 
            assert.equal(add(5, 5), 100) 
        }) 
    }) 

    describe("Subtraction", () => { 
        it("sub(15, 10) expected result 5 PASS", () => { 
            assert.equal(sub(15, 10), 5) 
        }) 
        it("sub(15, 10) expected result 100 FAIL", () => { 
            assert.equal(sub(15, 10), 100) 
        }) 
    }) 

    describe("Multiplication", () => { 
        it("mul(10, 10) expected result 100 PASS", () => { 
            assert.equal(mul(10, 10), 100) 
        }) 
        it("mul(10, 10) expected result 5 FAIL", () => { 
            assert.equal(mul(10, 10), 5) 
        }) 
    }) 

    describe("Division", () => { 
        it("div(10, 10) expected result 1 PASS", () => { 
            assert.equal(div(10, 10), 1) 
        }) 
        it("div(10, 10) expected result 100 FAIL", () => { 
            assert.equal(div(10, 10), 100) 
        }) 
    })

})
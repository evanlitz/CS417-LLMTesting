let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let testArr1 = [2, 3, 5, 7];
        let result1 = js_code.computeSumOfPrimes(testArr1);
        assert.equal(result1, 17);
        let testArr2 = [11];
        let result2 = js_code.computeSumOfPrimes(testArr2);
        assert.equal(result2, 11);
        done();
    })
})
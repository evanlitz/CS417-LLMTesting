let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.computeSumOfPrimes([1,2,3,4,5]), 10);
        assert.equal(js_code.computeSumOfPrimes([1,2,3,4,5,6,7,8,9,10]), 18);
        assert.equal(js_code.computeSumOfPrimes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 41);
    })
})
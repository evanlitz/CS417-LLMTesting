let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let sum = computeSumOfPrimes([]);
        assert.equal(sum, 0);
        sum = computeSumOfPrimes([1]);
        assert.equal(sum, 1);
        sum = computeSumOfPrimes([1, 2]);
        assert.equal(sum, 3);
        sum = computeSumOfPrimes([1, 2, 3]);
        assert.equal(sum, 6);
        sum = computeSumOfPrimes([1, 2, 3, 4]);
        assert.equal(sum, 10);
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [2, 3, 5, 7, 11];
        let sum = js_code.computeSumOfPrimes(primes);
        assert.equal(sum, 28);
        done();
    })
})
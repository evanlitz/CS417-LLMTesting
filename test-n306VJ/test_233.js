let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [1,2,3,4,5];
        let sum = js_code.computeSumOfPrimes(primes);
        assert.equal(sum, 15);
        done();
    })
})
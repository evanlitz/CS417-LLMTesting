let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [1];
        assert.equal(1, js_code.computeSumOfPrimes(primes));
        primes = [2, 3, 5, 7];
        assert.equal(17, js_code.computeSumOfPrimes(primes));
        done();
    })
})
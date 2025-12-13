let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [1, 2, 3, 4];
        let result = computeSumOfPrimes(primes);
        assert.equal(result, 10);
        done();
    })
})
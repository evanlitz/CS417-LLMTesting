let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [7, 13, 5, 79, 22];
        let result = js_code.computeSumOfPrimes(primes);
        assert.equal(result, 126);
        done();
    })
})
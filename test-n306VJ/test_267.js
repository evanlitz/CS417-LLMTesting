let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [1, 2, 3, 4, 5];
        let expected = 11;
        assert.equal(js_code.computeSumOfPrimes(primes), expected);
        done();
    })
})
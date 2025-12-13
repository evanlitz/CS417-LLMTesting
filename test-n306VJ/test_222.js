let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = [2, 3, 5, 7];
        let result = js_code.computeSumOfPrimes(primes);
        assert.equal(result, 17);
        done();
    })
})
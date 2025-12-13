let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primes = js_code.findPrimes(1, 10);
        assert.equal(primes.length, 4);

        let primes2 = js_code.findPrimes(10, 20);
        assert.equal(primes2.length, 4);
        done();
    })
})
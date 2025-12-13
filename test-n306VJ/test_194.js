let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        // let primes = js_code.findPrimes(1, 10);
        // assert.equal(primes.length, 4);
        let primes = js_code.findPrimes(1, 10);
        // assert.equal(primes, [2, 3, 5, 7]);
        // assert.deepEqual(primes, [2, 3, 5, 7]);
        assert.equal(primes[0], 2);
        assert.equal(primes[1], 3);
        assert.equal(primes[2], 5);
        assert.equal(primes[3], 7);
        console.log('test passed');
        let primes2 = js_code.findPrimes(10, 20);
    })
})
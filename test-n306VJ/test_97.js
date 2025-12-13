let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(isPrime(0), false);
        assert.equal(isPrime(1), false);
        assert.equal(isPrime(2), true);
        assert.equal(isPrime(3), true);
        assert.equal(isPrime(4), false);
        assert.equal(isPrime(5), true);
        assert.equal(isPrime(6), false);
        assert.equal(isPrime(7), true);
        assert.equal(isPrime(8), false);
        assert.equal(isPrime(9), false);
        assert.equal(isPrime(10), false);
        assert.equal(isPrime(11), true);
        assert.equal(isPrime(12), false);
        assert.equal(isPrime(13), true);
        assert.equal(isPrime(14), false);
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let isPrime = js_code.isPrime;
        assert.strictEqual(isPrime(0), false);
        assert.strictEqual(isPrime(1), false);
        assert.strictEqual(isPrime(2), true);
        assert.strictEqual(isPrime(3), true);
        assert.strictEqual(isPrime(4), false);
        assert.strictEqual(isPrime(5), true);
        assert.strictEqual(isPrime(6), false);
        assert.strictEqual(isPrime(7), true);
        assert.strictEqual(isPrime(8), false);
        assert.strictEqual(isPrime(9), false);
        assert.strictEqual(isPrime(10), false);
        assert.strictEqual(isPrime(11), true);
        assert.strictEqual(isPrime(12), false);
        assert.strictEqual(isPrime(13), true);
    })
})
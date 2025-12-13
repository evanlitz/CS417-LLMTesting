let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(isPrime(2), true);
        assert.equal(isPrime(4), false);
        assert.equal(isPrime(5), true);
        assert.equal(isPrime(7), true);
        assert.equal(isPrime(10), false);
        done();
    })
})
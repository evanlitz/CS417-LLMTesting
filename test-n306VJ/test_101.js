let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(true, isPrime(2));
        assert.equal(true, isPrime(3));
        assert.equal(true, isPrime(7));
        assert.equal(false, isPrime(4));
        assert.equal(false, isPrime(1));
        done();
    })
})
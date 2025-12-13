let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(false, js_code.isPrime(1), '1 is not a prime number');
        assert.equal(true, js_code.isPrime(2), '2 is a prime number');
        assert.equal(false, js_code.isPrime(4), '4 is not a prime number');
        assert.equal(true, js_code.isPrime(13), '13 is a prime number');
        assert.equal(false, js_code.isPrime(1024), '1024 is not a prime number');
        assert.equal(true, js_code.isPrime(15485863), '15485863 is a prime number');
        assert.equal(false, js_code.isPrime(15485864), '15485864 is not a prime number');
    })
})
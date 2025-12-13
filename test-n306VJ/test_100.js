let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(true, js_code.isPrime(2));
        assert.equal(true, js_code.isPrime(3));
        assert.equal(true, js_code.isPrime(7));
        assert.equal(false, js_code.isPrime(4));
        assert.equal(false, js_code.isPrime(1));
        done();
    })
})
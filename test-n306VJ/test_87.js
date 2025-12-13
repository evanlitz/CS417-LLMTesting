let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.isPrime(1), false);
        assert.equal(js_code.isPrime(2), true);
        assert.equal(js_code.isPrime(3), true);
        assert.equal(js_code.isPrime(4), false);
        assert.equal(js_code.isPrime(5), true);
        assert.equal(js_code.isPrime(6), false);
        assert.equal(js_code.isPrime(7), true);
        assert.equal(js_code.isPrime(8), false);
        assert.equal(js_code.isPrime(9), false);
        assert.equal(js_code.isPrime(10), false);
        done();
    })
})
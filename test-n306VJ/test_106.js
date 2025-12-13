let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.isPrime(2), true);
        assert.equal(js_code.isPrime(3), true);
        assert.equal(js_code.isPrime(5), true);
        assert.equal(js_code.isPrime(7), true);
        assert.equal(js_code.isPrime(11), true);
        assert.equal(js_code.isPrime(13), true);
        assert.equal(js_code.isPrime(17), true);
        assert.equal(js_code.isPrime(19), true);
        assert.equal(js_code.isPrime(23), true);
        assert.equal(js_code.isPrime(29), true);
        assert.equal(js_code.isPrime(31), true);
        assert.equal(js_code.isPrime(37), true);
    })
})
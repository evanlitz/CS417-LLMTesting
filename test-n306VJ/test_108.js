let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let value = js_code.isPrime(2);
        assert.equal(true, value, 'isPrime(2) should return true');
        value = js_code.isPrime(3);
        assert.equal(true, value, 'isPrime(3) should return true');
        value = js_code.isPrime(1);
        assert.equal(false, value, 'isPrime(1) should return false');
        value = js_code.isPrime(-1);
        assert.equal(false, value, 'isPrime(-1) should return false');
        value = js_code.isPrime(0);
        assert.equal(false, value, 'isPrime(0) should return false');
        value = js_code.isPrime(4);
    })
})
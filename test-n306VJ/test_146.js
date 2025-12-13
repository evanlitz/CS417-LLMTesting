let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primeNumbers = js_code.findPrimes(1, 10);
        assert.equal(primeNumbers.length, 4);
        assert.equal(primeNumbers.indexOf(1) >= 0, false);
        assert.equal(primeNumbers.indexOf(2) >= 0, true);
        assert.equal(primeNumbers.indexOf(3) >= 0, true);
        assert.equal(primeNumbers.indexOf(5) >= 0, true);
        assert.equal(primeNumbers.indexOf(7) >= 0, true);
        assert.equal(primeNumbers.indexOf(11) >= 0, false);
        primeNumbers = js_code.findPrimes(10, 20);
        assert.equal(primeNumbers.length, 4);
    })
})
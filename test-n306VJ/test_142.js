let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        const primeNumbers = js_code.findPrimes(2, 10);
        assert.deepEqual(primeNumbers, [2, 3, 5, 7]);
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual(js_code.findPrimes(2, 3), [2]);
        assert.deepEqual(js_code.findPrimes(2, 4), [2, 3]);
        assert.deepEqual(js_code.findPrimes(2, 5), [2, 3]);
        assert.deepEqual(js_code.findPrimes(2, 6), [2, 3, 5]);
        assert.deepEqual(js_code.findPrimes(2, 7), [2, 3, 5]);
        assert.deepEqual(js_code.findPrimes(2, 8), [2, 3, 5, 7]);
    })
})
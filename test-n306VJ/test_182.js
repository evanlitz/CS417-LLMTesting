let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual(js_code.findPrimes(0, 10), [2, 3, 5, 7]);
        assert.deepEqual(js_code.findPrimes(10, 20), [11, 13, 17, 19]);
        assert.deepEqual(js_code.findPrimes(20, 30), [23, 29]);
        done();
    })
})
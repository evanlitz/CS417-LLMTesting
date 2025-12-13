let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual([2, 3, 5, 7, 11, 13], js_code.findPrimes(0, 15));
        done();
    })
})
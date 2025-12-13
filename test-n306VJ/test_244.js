let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual(js_code.computeSumOfPrimes([2, 3, 5, 7]), 17);
        assert.deepEqual(js_code.computeSumOfPrimes([11]), 11);
        done();
    })
})
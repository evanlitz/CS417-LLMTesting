let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.computeSumOfPrimes([1, 2, 3]), 6);
        assert.equal(js_code.computeSumOfPrimes([5, 2, 3]), 10);
        done();
    })
})
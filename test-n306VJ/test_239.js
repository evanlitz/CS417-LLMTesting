let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(computeSumOfPrimes([2, 3, 5, 7]), 17);
        assert.equal(computeSumOfPrimes([11]), 11);
        done();
    })
})
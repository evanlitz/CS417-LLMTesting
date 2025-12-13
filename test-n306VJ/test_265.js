let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var result = computeSumOfPrimes([2, 3, 5, 7]);
        assert.equal(result, 17);
        result = computeSumOfPrimes([11]);
        assert.equal(result, 11);
        done();
    })
})
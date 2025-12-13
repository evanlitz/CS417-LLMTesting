let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.computeSumOfPrimes([1, 2, 3]), 6);
        assert.equal(js_code.computeSumOfPrimes([1, 2, 3, 5, 7, 11]), 29);
        assert.equal(js_code.computeSumOfPrimes([1, 2, 3, 5, 7, 11, 13, 17, 19]), 78);
        done();
    })
})
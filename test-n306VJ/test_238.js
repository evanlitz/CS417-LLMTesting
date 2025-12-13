let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result1 = js_code.computeSumOfPrimes([2, 3, 5, 7]);
        assert.equal(result1, 17);
        let result2 = js_code.computeSumOfPrimes([11]);
        assert.equal(result2, 11);
        done();
    })
})
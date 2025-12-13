let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        const result = js_code.computeSumOfPrimes([1,2,3,4,5,6,7,8,9,10]);
        assert.equal(result, 17);
        done();
    })
})
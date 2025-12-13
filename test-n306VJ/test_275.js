let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = js_code.computeSumOfPrimes([2, 3, 5, 7]);
        assert.equal(result, 17);
        done();
    })
})
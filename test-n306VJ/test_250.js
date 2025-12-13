let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = js_code.computeSumOfPrimes([11]);
        assert.equal(result, 11);
        done();
    })
})
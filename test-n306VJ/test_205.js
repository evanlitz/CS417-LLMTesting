let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        // usage #3
        const lowerBound = 20;
        const upperBound = 30;
        const result = js_code.findPrimes(lowerBound, upperBound);
        const expected_result = [23, 29];
        assert.deepEqual(result, expected_result);

        done();
    })
})
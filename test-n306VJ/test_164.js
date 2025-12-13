let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        const lowerBound = 1;
        const upperBound = 10;
        const expected = [1, 2, 3, 5, 7];
        const actual = js_code.findPrimes(lowerBound, upperBound);
        assert.deepEqual(actual, expected);
        done();
    })
})
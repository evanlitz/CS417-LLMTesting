let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        // existing upperBound and lowerBound
        let upperBound = 10;
        let lowerBound = 3;
        // result should be the array [3, 5, 7]
        let result = js_code.findPrimes(lowerBound, upperBound);
        // test if the result is correct
        assert.deepEqual(result, [3, 5, 7]);
        done();
    })
})
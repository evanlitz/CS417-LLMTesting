let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let upperBound = 10;
        let lowerBound = 3;
        let result = js_code.findPrimes(lowerBound, upperBound);
        assert.deepEqual(result, [3, 5, 7]);
        done();
    })
})
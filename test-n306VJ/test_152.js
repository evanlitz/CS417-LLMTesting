let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let lowerBound = 1;
        let upperBound = 10;
        let res = js_code.findPrimes(lowerBound, upperBound);
        let expect = [2,3,5,7];
        assert.deepEqual(res, expect);
        done();
    })
})
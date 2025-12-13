let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let lowerBound = 10;
        let upperBound = 20;
        let res = js_code.findPrimes(lowerBound, upperBound);
        let expect = [11,13,17,19];
        assert.deepEqual(res, expect);
        done();
    })
})
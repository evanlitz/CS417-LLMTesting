let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let lowerBound = 1;
        let upperBound = 10;
        let primeNumbers = findPrimes(lowerBound, upperBound);
        assert.equal(primeNumbers, [2,3,5,7])
        done();
    })
})
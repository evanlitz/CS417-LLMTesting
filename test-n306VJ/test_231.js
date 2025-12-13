let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var primes = [1,2,3,4,5];
        var sum = js_code.computeSumOfPrimes(primes);
        assert.equal(sum, 15);
        done();
    })
})
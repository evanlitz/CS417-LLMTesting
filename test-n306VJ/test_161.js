let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let primeNumbers = findPrimes(0, 10);
        assert(primeNumbers.length == 4);
        assert(primeNumbers[0] == 2);
        assert(primeNumbers[1] == 3);
        assert(primeNumbers[2] == 5);
        assert(primeNumbers[3] == 7);
        done();
    })
})
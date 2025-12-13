let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert(isPrime(2) === true);
        assert(isPrime(17) === true);
        assert(isPrime(4) === false);
        assert(isPrime(1) === false);
        done();
    })
})
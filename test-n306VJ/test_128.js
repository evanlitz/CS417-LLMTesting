let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert(js_code.isPrime(2), '2 is prime');
        assert(js_code.isPrime(3), '3 is prime');
        assert(js_code.isPrime(4) == false, '4 is not prime');
        done();
    })
})
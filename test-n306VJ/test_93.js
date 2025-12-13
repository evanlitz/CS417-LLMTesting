let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert(js_code.isPrime(2) === true);
        assert(js_code.isPrime(17) === true);
        assert(js_code.isPrime(4) === false);
        assert(js_code.isPrime(1) === false);
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        this.timeout(10000);
        assert.equal(isPrime(2), true);
        assert.equal(isPrime(17), true);
        assert.equal(isPrime(4), false);
        assert.equal(isPrime(1), false);
        done();
    })
})
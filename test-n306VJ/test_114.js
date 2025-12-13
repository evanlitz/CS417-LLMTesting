let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        const number = 2;
        const result = isPrime(number);
        assert.strictEqual(result, true);
        done();
    })
})
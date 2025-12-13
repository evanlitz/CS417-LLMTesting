let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = findPrimes(1, 10);
        assert.equal(result, [2, 3, 5, 7]);
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual(findPrimes(1, 10), [2,3,5,7]);
        assert.deepEqual(findPrimes(10, 20), [11,13,17,19]);
        done();
    })
})
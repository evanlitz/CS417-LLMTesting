let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let res = findPrimes(2, 10);
        assert.deepEqual(res, [2, 3, 5, 7]);
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual(js_code.findPrimes(10, 20, 2, 11), [11, 13, 17, 19], [2, 3, 5, 7, 11]);
        done();
    })
})
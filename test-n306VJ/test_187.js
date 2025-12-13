let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.deepEqual(js_code.findPrimes(0, 100), [2, 3, 5, 7, 11, 13, 
            17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 
            59, 61, 67, 71, 73, 79, 83, 89, 97]);
        done();
    })
})
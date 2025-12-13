let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        js_code = require('./js_code.js');
        assert.deepEqual(js_code.findPrimes(10, 20), [11, 13, 17, 19]);
        assert.deepEqual(js_code.findPrimes(2, 11), [2, 3, 5, 7, 11]);
        done();
    })
})
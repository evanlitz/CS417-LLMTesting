let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let expected = [2, 3, 5, 7, 11, 13, 17, 19];
        let actual = js_code.findPrimes(2, 20);
        assert.deepEqual(expected, actual);
        done();
    })
})
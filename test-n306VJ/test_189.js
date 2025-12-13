let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let actual = js_code.findPrimes(1, 10);
        let expected = [2, 3, 5, 7];
        assert.deepEqual(actual, expected);
        done();
    })
})
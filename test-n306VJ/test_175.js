let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var expected = [1,2,3,5,7];
        var actual = js_code.findPrimes(1,10);
        assert.deepEqual(actual, expected);
        done();
    })
})
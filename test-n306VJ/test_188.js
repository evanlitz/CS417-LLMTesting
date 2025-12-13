let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = js_code.findPrimes(1, 10);
        assert.deepEqual(result, [2, 3, 5, 7]);
        let result2 = js_code.findPrimes(10, 20);
        assert.deepEqual(result2, [11, 13, 17, 19]);
        done();
    })
})
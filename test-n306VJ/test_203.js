let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        // usage #1
        let result = js_code.findPrimes(1, 10);
        let expected_result = [2, 3, 5, 7];
        assert.deepEqual(result, expected_result);

        // usage #2
        result = js_code.findPrimes(10, 20);
        expected_result = [11, 13, 17, 19];
        assert.deepEqual(result, expected_result);

        done();
    })
})
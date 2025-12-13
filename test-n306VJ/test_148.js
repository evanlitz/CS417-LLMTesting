let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let prime_numbers = js_code.findPrimes(1, 10);
        let result_1 = [2, 3, 5, 7];
        assert.deepEqual(result_1, prime_numbers);
        prime_numbers = js_code.findPrimes(10, 20);
        let result_2 = [11, 13, 17, 19];
        assert.deepEqual(result_2, prime_numbers);
        done();
    })
})
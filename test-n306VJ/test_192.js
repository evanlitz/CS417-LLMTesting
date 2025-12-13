let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var findPrimes = js_code.findPrimes;
        const result1 = findPrimes(1, 10);
        assert.equal(result1.length, 4);
        assert.equal(result1[0], 2);
        assert.equal(result1[1], 3);
        assert.equal(result1[2], 5);
        assert.equal(result1[3], 7);

        const result2 = findPrimes(10, 20);
        assert.equal(result2.length, 3);
        assert.equal(result2[0], 11);
        assert.equal(result2[1], 13);
        assert.equal(result2[2], 17);

        done();
    })
})
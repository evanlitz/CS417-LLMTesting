let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = js_code.findPrimes(3, 8);
        assert.equal(result.length, 3);
        assert.equal(result[0], 3);
        assert.equal(result[1], 5);
        assert.equal(result[2], 7);
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(computeSumOfPrimes([1, 2, 3]), 6);
      assert.equal(computeSumOfPrimes([5, 2, 3]), 10);
      done();
    })
})
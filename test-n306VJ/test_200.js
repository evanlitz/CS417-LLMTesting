let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let expect = [2, 3, 5, 7];
      let actual = js_code.findPrimes(1, 10);
      assert.deepEqual(actual, expect);
      done();
    })
})
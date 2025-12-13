let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let actual = js_code.findPrimes(10, 20);
        console.log(actual);
        let expected = [11, 13, 17, 19];
        assert.deepEqual(actual, expected);
        done();
    })
})
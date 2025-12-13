let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        js_code.computeSumOfPrimes([2, 3, 5, 7]).then(function(sum) {
            assert.equal(sum, 17, 'computeSumOfPrimes([2, 3, 5, 7]) should return 17');
            return js_code.computeSumOfPrimes([11]);
        }).then(function(sum) {
            assert.equal(sum, 11, 'computeSumOfPrimes([11]) should return 11');
            done();
        }).catch(done);
    })
})
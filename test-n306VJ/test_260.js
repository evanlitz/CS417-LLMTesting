let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        js_code.computeSumOfPrimes([2, 3, 5, 7]).then(function(result) {
            assert.equal(result, 17);
            done();
        }).catch(function(err) {
            done(err);
        });
    })
})
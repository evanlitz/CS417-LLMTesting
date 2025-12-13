let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        js_code.findPrimes(1, 10).then((result) => {
            assert.deepStrictEqual(result, [2, 3, 5, 7]);
            done();
        }).catch((err) => {
            done(err);
        });
    })
})
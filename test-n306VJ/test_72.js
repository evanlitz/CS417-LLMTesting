let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        js_code.triangle(3, 3, 3).then(function(result) {
            assert.equal(result, '正三角形');
            done();
        }).catch(function(err) {
            done(err);
        })
    })
})
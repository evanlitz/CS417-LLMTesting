let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let s1 = 3;
        let s2 = 3;
        let s3 = 3;
        let result = js_code.triangle(s1, s2, s3);
        assert.equal(result, '正三角形');
        done();
    })
})
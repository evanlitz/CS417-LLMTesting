let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        this.timeout(10000);
        assert.equal(js_code.triangle(3, 3, 3), '正三角形');
        assert.equal(js_code.triangle(3, 3, 5), '等腰三角形');
        assert.equal(js_code.triangle(3, 4, 5), '直角三角形');
        assert.equal(js_code.triangle(1, 2, 10), '非三角形');
        done();
    })
})
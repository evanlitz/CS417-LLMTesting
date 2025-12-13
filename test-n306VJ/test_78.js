let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal( js_code.triangle(4, 4, 4), '等边三角形');
        assert.equal( js_code.triangle(4, 4, 5), '等腰三角形');
        assert.equal( js_code.triangle(3, 4, 5), '直角三角形');
        assert.equal( js_code.triangle(4, 5, 6), '一般三角形');
        assert.equal( js_code.triangle(1, 1, 10), '非三角形');
        done();
    })
})
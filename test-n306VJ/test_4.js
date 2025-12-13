let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(1, 2, 3), '不是三角形');
        assert.equal(js_code.triangle(2, 2, 3), '等腰三角形');
        assert.equal(js_code.triangle(3, 3, 3), '等边三角形');
        assert.equal(js_code.triangle(2, 3, 4), '普通三角形');
        done();
    })
})
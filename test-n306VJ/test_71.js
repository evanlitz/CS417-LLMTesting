let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        js_code().then(function(js_code) {
            return js_code.triangle(3, 3, 3);
        }).then(function(result) {
            assert.equal(result, '正三角形');
            return js_code.triangle(3, 3, 5);
        }).then(function(result) {
            assert.equal(result, '等腰三角形');
            return js_code.triangle(3, 4, 5);
        }).then(function(result) {
            assert.equal(result, '一般三角形');
            return js_code.triangle(1, 2, 10);
        }).then(function(result) {
            assert.equal(result, '不是三角形');
})    })
})
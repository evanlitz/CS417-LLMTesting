let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(-1, 1, 1), 'INVALID');
        assert.equal(js_code.triangle(1, -1, 1), 'INVALID');
        assert.equal(js_code.triangle(1, 1, -1), 'INVALID');
        assert.equal(js_code.triangle(0, 1, 1), 'INVALID');
        assert.equal(js_code.triangle(1, 0, 1), 'INVALID');
        assert.equal(js_code.triangle(1, 1, 0), 'INVALID');
        assert.equal(js_code.triangle(1, 1, 1), 'EQUILATERAL');
    })
})
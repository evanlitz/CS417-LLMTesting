let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(2, 3, 4), 'scalene');
        assert.equal(js_code.triangle(3, 3, 3), 'equilateral');
        assert.equal(js_code.triangle(3, 3, 2), 'isosceles');
        assert.equal(js_code.triangle(3, 3, 1), 'not a triangle');
        assert.equal(js_code.triangle(3, 3, -1), 'not a triangle');
        assert.equal(js_code.triangle(3, 3, 0), 'not a triangle');
        assert.equal(js_code.triangle(3, 2, 3), 'isosceles');
    })
})
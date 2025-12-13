let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(3, 3, 3), js_code.triangle.Triangle.EQUILATERAL);
        assert.equal(js_code.triangle(3, 3, 5), js_code.triangle.Triangle.ISOSCELES);
        assert.equal(js_code.triangle(3, 4, 5), js_code.triangle.Triangle.SCALENE);
        assert.equal(js_code.triangle(1, 2, 10), js_code.triangle.Triangle.INVALID);
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(1, 1, 1), js_code.Triangle.EQUILATERAL);
        assert.equal(js_code.triangle(2, 2, 1), js_code.Triangle.ISOSCELES);
        assert.equal(js_code.triangle(3, 4, 5), js_code.Triangle.SCALENE);
        assert.equal(js_code.triangle(1, 1, 2), js_code.Triangle.INVALID);
        assert.equal(js_code.triangle(0, 0, 0), js_code.Triangle.INVALID);
        done();
    })
})
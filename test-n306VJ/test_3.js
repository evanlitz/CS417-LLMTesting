let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(0, 0, 0), 'not a triangle');
        assert.equal(js_code.triangle(-1, -1, -1), 'not a triangle');
        assert.equal(js_code.triangle(1, 1, 1), 'equilateral');
        assert.equal(js_code.triangle(2, 2, 3), 'isosceles');
        assert.equal(js_code.triangle(3, 4, 5), 'scalene');
        done();
    })
})
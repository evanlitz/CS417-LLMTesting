let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(5, 5, 5), 'EQUILATERAL');
        assert.equal(js_code.triangle(2, 3, 4), 'SCALENE');
        assert.equal(js_code.triangle(4, 4, 5), 'ISOSCELES');
        assert.equal(js_code.triangle(0, 0, 0), 'INVALID');
        assert.equal(js_code.triangle(1, 1, 3), 'INVALID');
        assert.equal(js_code.triangle(1, 3, 3), 'ISOSCELES');
        assert.equal(js_code.triangle(3, 3, 1), 'ISOSCELES');
    })
})
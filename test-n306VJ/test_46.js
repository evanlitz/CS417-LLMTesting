let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(1, 2, 3), 'SCALENE');
        assert.equal(js_code.triangle(3, 3, 3), 'EQUILATERAL');
        assert.equal(js_code.triangle(2, 2, 3), 'ISOSCELES');
        assert.equal(js_code.triangle(3, 2, 2), 'ISOSCELES');
        assert.equal(js_code.triangle(2, 3, 2), 'ISOSCELES');
        assert.equal(js_code.triangle(1, 2, 0), 'INVALID');
        assert.equal(js_code.triangle(1, 2, -1), 'INVALID');
        done();
    })
})
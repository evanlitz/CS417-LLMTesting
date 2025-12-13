let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.Triangle(3, 3, 3), 'Equilateral');
        assert.equal(js_code.Triangle(3, 3, 5), 'Isosceles');
        assert.equal(js_code.Triangle(3, 4, 5), 'Scalene');
        assert.equal(js_code.Triangle(1, 2, 10), 'Invalid');
        assert.equal(js_code.Triangle(0, 1, 2), 'Invalid');
        assert.equal(js_code.Triangle(-1, 1, 2), 'Invalid');
        assert.equal(js_code.Triangle(1, 2, 0), 'Invalid');
    })
})
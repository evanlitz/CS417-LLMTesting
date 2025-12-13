let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(3, 3, 3), 'Equilateral');
        assert.equal(js_code.triangle(3, -1, 3), 'Invalid');
        assert.equal(js_code.triangle(3, 3, 4), 'Isosceles');
        assert.equal(js_code.triangle(3, 4, 5), 'Scalene');
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(1, 2, 3), 'INVALID');
        assert.equal(js_code.triangle(1, 1, 1), 'EQUILATERAL');
        assert.equal(js_code.triangle(1, 2, 1), 'ISOSCELES');
        assert.equal(js_code.triangle(1, 1, 2), 'ISOSCELES');
        assert.equal(js_code.triangle(1, 2, 2), 'ISOSCELES');
        assert.equal(js_code.triangle(1, 3, 2), 'ISOSCELES');
    })
})
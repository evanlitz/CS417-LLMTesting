let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(3, 4, 5), 'scalene');
        assert.equal(js_code.triangle(3, 3, 3), 'equilateral');
        assert.equal(js_code.triangle(3, 3, 4), 'isosceles');
        assert.equal(js_code.triangle(3, 3, 5), 'invalid');
        assert.equal(js_code.triangle(3, 4, 4), 'isosceles');
        assert.equal(js_code.triangle(3, 4, 7), 'invalid');
        done();
    })
})
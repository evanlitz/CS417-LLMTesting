let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(0, 5, 10), 'INVALID');
        assert.equal(js_code.triangle(5, 0, 10), 'INVALID');
        assert.equal(js_code.triangle(5, 10, 0), 'INVALID');
        assert.equal(js_code.triangle(5, 10, 5), 'ISOSCELES');
        assert.equal(js_code.triangle(5, 5, 5), 'EQUILATERAL');
        assert.equal(js_code.triangle(1, 2, 3), 'INVALID');
        done();
    })
})
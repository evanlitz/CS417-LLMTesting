let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(2,2,2),'EQUILATERAL');
        assert.equal(js_code.triangle(3,3,2),'ISOSCELES');
        assert.equal(js_code.triangle(3,4,5),'SCALENE');
        assert.equal(js_code.triangle(1,2,3),'INVALID');
        done();
    })
})
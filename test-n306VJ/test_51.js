let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(0,0,0),'INVALID');
        assert.equal(js_code.triangle(1,1,1),'EQUILATERAL');
        assert.equal(js_code.triangle(1,1,2),'ISOSCELES');
        assert.equal(js_code.triangle(1,2,3),'SCALENE');
        done();
    })
})
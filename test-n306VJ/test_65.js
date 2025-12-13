let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(triangle(2,2,2),'EQUILATERAL');
        assert.equal(triangle(3,3,2),'ISOSCELES');
        assert.equal(triangle(3,4,5),'SCALENE');
        assert.equal(triangle(1,2,3),'INVALID');
        done();
    })
})
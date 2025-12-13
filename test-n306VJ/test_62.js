let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(triangle(3, 3, 3), 'EQUILATERAL');
        assert.equal(triangle(3, 3, 5), 'ISOSCELES');
        assert.equal(triangle(3, 4, 5), 'SCALENE');
        assert.equal(triangle(1, 2, 10), 'INVALID');
        done();
    })
})
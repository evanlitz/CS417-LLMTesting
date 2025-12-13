let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var triangle = js_code.triangle;
        if (!triangle) {
            return done(new Error('triangle is not a function'));
        }
        assert.equal(triangle(1, 2, 3), 'SCALENE');
        assert.equal(triangle(3, 3, 3), 'EQUILATERAL');
        assert.equal(triangle(2, 2, 3), 'ISOSCELES');
        assert.equal(triangle(3, 2, 2), 'ISOSCELES');
        assert.equal(triangle(2, 3, 2), 'ISOSCELES');
        assert.equal(triangle(1, 2, 0), 'INVALID');
    })
})
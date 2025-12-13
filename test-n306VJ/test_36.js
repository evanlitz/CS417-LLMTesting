let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        // usage #1
        assert.equal(js_code.triangle(3, 3, 3), 'EQUILATERAL');
        // usage #2
        assert.equal(js_code.triangle(3, 3, 5), 'ISOSCELES');
        // usage #3
        assert.equal(js_code.triangle(3, 4, 5), 'SCALENE');
        // usage #4
        assert.equal(js_code.triangle(1, 2, 10), 'INVALID');
        // usage #5
        assert.equal(js_code.triangle(-1, -2, -3), 'INVALID');
        done();
    })
})
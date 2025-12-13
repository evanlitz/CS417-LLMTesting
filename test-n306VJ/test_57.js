let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code.triangle(3, 3, 3), 'EQUILATERAL', 'usage #1');
        assert.equal(js_code.triangle(3, 3, 5), 'ISOSCELES', 'usage #2');
        assert.equal(js_code.triangle(3, 4, 5), 'SCALENE', 'usage #3');
        assert.equal(js_code.triangle(1, 2, 10), 'INVALID', 'usage #4');
        done();
    })
})
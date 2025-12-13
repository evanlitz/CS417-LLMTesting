let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        assert.equal(js_code(3, 3, 3), 'EQUILATERAL');
        assert.equal(js_code(3, 3, 5), 'ISOSCELES');
        assert.equal(js_code(3, 4, 5), 'SCALENE');
        assert.equal(js_code(1, 2, 10), 'INVALID');
        assert.equal(js_code(0, 1, 2), 'INVALID');
        done();
    })
})
let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = triangle(3, 3, 3);
        assert.equal(result, 'equilateral');
        done();
    })
})
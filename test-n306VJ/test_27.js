let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let result = js_code.triangle(10,10,10);
        assert.equal(result, js_code.triangle.EQUILATERAL);
        done();
    })
})
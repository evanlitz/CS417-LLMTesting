let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let eq = js_code.triangle(3, 3, 3);
        assert.strictEqual(eq, 'EQUILATERAL');
        done();
    })
})
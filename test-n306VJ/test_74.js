let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let res = js_code.triangle;
        assert.equal(typeof res, 'function');
        done();
    })
})
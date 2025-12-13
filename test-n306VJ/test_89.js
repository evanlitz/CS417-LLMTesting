let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var test1 = js_code.isPrime(1);
        assert.equal(test1, false);

        var test2 = js_code.isPrime(2);
        assert.equal(test2, true);
        
        var test3 = js_code.isPrime(3);
        assert.equal(test3, true);

        var test4 = js_code.isPrime(4);
        assert.equal(test4, false);

        var test5 = js_code.isPrime(5);
        assert.equal(test5, true);

        var test6 = js_code.isPrime(6);
        assert.equal(test6, false);

        var test7 = js_code.isPrime(7);
        assert.equal(test7, true);
    })
})
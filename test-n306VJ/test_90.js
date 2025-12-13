let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        var test1 = isPrime(1);
        assert.equal(test1, false);

        var test2 = isPrime(2);
        assert.equal(test2, true);
        
        var test3 = isPrime(3);
        assert.equal(test3, true);

        var test4 = isPrime(4);
        assert.equal(test4, false);

        var test5 = isPrime(5);
        assert.equal(test5, true);

        var test6 = isPrime(6);
        assert.equal(test6, false);

        var test7 = isPrime(7);
        assert.equal(test7, true);
    })
})
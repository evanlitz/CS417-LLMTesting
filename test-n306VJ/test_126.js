let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let tests = [
            { num: 1, expected: false },
            { num: 2, expected: true },
            { num: 3, expected: true },
            { num: 4, expected: false },
            { num: 5, expected: true },
            { num: 6, expected: false },
            { num: 7, expected: true },
            { num: 8, expected: false },
            { num: 9, expected: false },
            { num: 10, expected: false },
            { num: 11, expected: true },
            { num: 12, expected: false },
            { num: 13, expected: true },
        ];
    })
})
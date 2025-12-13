let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let test_cases = [
            {
                input: 2,
                output: true
            },
            {
                input: 17,
                output: true
            },
            {
                input: 4,
                output: false
            },
            {
                input: 1,
                output: false
            }
        ];
        for (let test_case of test_cases) {
            let assert_func = (test_case.output === true) ? assert.ok : assert.fail;
            assert_func(js_code.isPrime(test_case.input));
        }
        done();
    })
})
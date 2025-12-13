let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let cases = [
            {
                args: [3, 3, 3],
                ret: js_code.Triangle.EQUILATERAL
            },
            {
                args: [3, 3, 5],
                ret: js_code.Triangle.ISOSCELES
            },
            {
                args: [3, 4, 5],
                ret: js_code.Triangle.SCALENE
            },
            {
                args: [1, 2, 10],
                ret: js_code.Triangle.INVALID
            }
        ];
        cases.forEach(function(item) {
            let ret = js_code.triangle.apply(this, item.args);
            // the test below fails with the following error:
})    })
})
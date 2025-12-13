let mocha = require('mocha');
let assert = require('assert');
let js_code = require('..');
describe('test suite', function() {
    it('test case', function(done) {
        let Triangle = js_code('Triangle', 'js_code/Triangle.js');
        let triangle = require('js_code/triangle.js');
        let INVALID = Triangle.INVALID;
        let EQUILATERAL = Triangle.EQUILATERAL;
        let ISOSCELES = Triangle.ISOSCELES;
        let SCALENE = Triangle.SCALENE;

        assert(triangle(1, 1, 1) === EQUILATERAL);
        assert(triangle(2, 2, 3) === ISOSCELES);
        assert(triangle(3, 4, 5) === SCALENE);
        assert(triangle(0, 1, 2) === INVALID);
    })
})
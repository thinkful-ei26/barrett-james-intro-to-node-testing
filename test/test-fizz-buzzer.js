'use strict';
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('the fizzBuzzer function', function(){
    it('if a string is sent in, should return the error message not a number', function(){
        expect(function(){
            fizzBuzzer("string");
        }).to.throw(Error);
    });
    it('should return a string of "fizz-buzz" if a multiple of 15 is input', function(){
        expect(fizzBuzzer(15)).to.include('fizz-buzz');
        expect(fizzBuzzer(15)).to.be.a('string');
    });
    it('should return a string of "fizz-buzz" if a multiple of 5 is input', function(){
        expect(fizzBuzzer(5)).to.include('buzz');
        expect(fizzBuzzer(5)).to.be.a('string');
    });
    it('should return a string of "fizz-buzz" if a multiple of 3 is input', function(){
        expect(fizzBuzzer(3)).to.include('fizz');
        expect(fizzBuzzer(3)).to.be.a('string');
    });
    it('should return a number if not divisble by 3 or 5', function(){
        expect(fizzBuzzer(2)).to.be.a('number');
    });
});


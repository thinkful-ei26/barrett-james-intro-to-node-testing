'use strict';
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('the fizzBuzzer function', function(){
    it('if a string is sent in, should return the error message not a number', function(){
        //const answer = 
        
        expect(function(){
            fizzBuzzer("string");
        }).to.throw(Error);
    });
});


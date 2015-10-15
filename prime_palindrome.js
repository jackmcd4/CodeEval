/*
PRIME PALINDROME
CHALLENGE DESCRIPTION:

Write a program which determines the largest prime palindrome less than 1000.

INPUT SAMPLE:

There is no input for this program.

OUTPUT SAMPLE:

Print to stdout the largest prime palindrome less than 1000.

929
*/
var fs  = require("fs");

var isPalin = function(elem){
    if(elem.toString() === elem.toString().split('').reverse().join('')){
        return true;
    }
    return false;
};

var isPrime = function(item){
    if(item % 2 === 0){
        return false
    }
    for(var i = item-1; i > 1; i--){
        if(item % i === 0){
            return false
        }
    }
    return true;
};

var highPal = 0;

for(var i = 999; i > 900; i--){
    if(isPalin(i)){
        if(isPrime(i)){
            if(i > highPal){
                highPal = i;
            }
        }
    }
}

console.log(highPal);
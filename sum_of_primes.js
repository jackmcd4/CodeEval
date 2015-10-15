/*
SUM OF PRIMES
CHALLENGE DESCRIPTION:

Write a program which determines the sum of the first 1000 prime numbers.

INPUT SAMPLE:

There is no input for this program.

OUTPUT SAMPLE:

Print to stdout the sum of the first 1000 prime numbers.

3682913
*/

var fs  = require("fs");
var isPrime = function(num){
    for(var i = num-1; i > 1; i--){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
var i = 3;
var total = 2;
var count = 2;
while(count <= 1000){
    if(isPrime(i)){
        count ++;
        total += i;
    }
    i += 2;
}

console.log(total);
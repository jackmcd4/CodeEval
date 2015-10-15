/*
FIBONACCI SERIES
CHALLENGE DESCRIPTION:

The Fibonacci series is defined as: F(0) = 0; F(1) = 1; F(n) = F(n–1) + F(n–2) when n>1. Given an integer n≥0, print out the F(n).

INPUT SAMPLE:

The first argument will be a path to a filename containing integer numbers, one per line. E.g.

5
12
OUTPUT SAMPLE:

Print to stdout, the fibonacci number, F(n). E.g.

5
144
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = 0;
        var b = 1;
        var c = 1;
        for(var i = 0; i < line; i++){
            a = b;
            b = c;
            c = a + b;
        }
        console.log(a)
    }
});
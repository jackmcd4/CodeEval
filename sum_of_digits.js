/*
SUM OF DIGITS
CHALLENGE DESCRIPTION:

Given a positive integer, find the sum of its constituent digits.

INPUT SAMPLE:

The first argument will be a path to a filename containing positive integers, one per line. E.g.

23
496

OUTPUT SAMPLE:

Print to stdout, the sum of the numbers that make up the integer, one per line. E.g.

5
19
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var arr = line.toString().split("");
        console.log(arr.reduce(function(x, y){return x + (+y)}, 0));
    }
});
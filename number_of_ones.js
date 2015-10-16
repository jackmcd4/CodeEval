/*
NUMBER OF ONES
CHALLENGE DESCRIPTION:

Write a program which determines the number of 1 bits in the internal representation of a given integer.

INPUT SAMPLE:

The first argument is a path to a file. The file contains integers, one per line.

For example:

10
22
56
OUTPUT SAMPLE:

Print to stdout the number of ones in the binary form of each number.

For example:

2
3
3

*/

var calcBin = function(val) {
    val = +val;
    var count = 0, curr = val, num = 0;
    for(var i = 16; i >= 0; i--) {
        num = Math.pow(2, i);
        if((curr - num) >= 0) {
            curr -= num;
            count++;
        }
    }
    console.log(count)
}
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        calcBin(line);
    }
});
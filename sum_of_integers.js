/*
SUM OF INTEGERS

CHALLENGE DESCRIPTION:

Write a program to determine the largest sum of contiguous integers in a list.

INPUT SAMPLE:

The first argument is a path to a filename containing a comma-separated list of integers, one per line.

For example:

-10,2,3,-2,0,5,-15
2,3,-2,-1,10

OUTPUT SAMPLE:

Print to stdout the largest sum. In other words, of all the possible contiguous subarrays for a given array, find the one with the largest sum, and print that sum.

For example:

8
12
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(",");
        var greatest = Number.NEGATIVE_INFINITY, count = 0, i = 0, curr;
        for(i; i < line.length; i++) {
            curr = (+line[i]);
            count += curr;
            if(greatest < count) {
                greatest = count;
            }
            if(count < 0) {
                count = 0;
            }
        }
        console.log(greatest);
    }
});
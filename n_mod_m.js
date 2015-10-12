/*
N MOD M
CHALLENGE DESCRIPTION:


Given two integers N and M, calculate N Mod M (without using any inbuilt modulus operator).

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains two comma separated positive integers. E.g.

20,6
2,3
You may assume M will never be zero.

OUTPUT SAMPLE:

Print out the value of N Mod M
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(",");
        var num = line[0] / line[1];
        num = num.toString().split(".");
        console.log(line[0] - (line[1] * num[0]));
    }
});
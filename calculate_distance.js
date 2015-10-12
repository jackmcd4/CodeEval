/*
CALCULATE DISTANCE
CHALLENGE DESCRIPTION:

You have coordinates of 2 points and need to find the distance between them.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

(25, 4) (1, -6)
(47, 43) (-25, -11)
All numbers in input are integers between -100 and 100.

OUTPUT SAMPLE:

Print results in the following way.

26
90

You don't need to round the results you receive. They must be integer numbers.
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.slice(1, line.length-1);
        line = line.split(" ");
        var a = line[0].slice(0, line[0].length - 1) - line[2].slice(1, line[2].length - 1);
        var b =  line[1].slice(0, line[1].length - 1) - line[3];
        console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
    }
});
/*
STRINGS AND ARROWS
CHALLENGE DESCRIPTION:

You have a string composed of the following symbols: '>', '<', and '-'. Your task is to find, count, and print to the output a number of arrows in the string. An arrow is a set of the following symbols: '>>-->' or '<--<<'. 
Note that one character may belong to two arrows at the same time. Such example is shown in the line #1.

INPUT SAMPLE:

The first argument is a path to a file. Each line includes a test case with a string of different length from 10 to 250 characters. The string consists of '>', '<', and '-' symbols.

For example:

<--<<--<<
<<>>--><--<<--<<>>>--><
<-->>
OUTPUT SAMPLE:

Print the total number of found arrows for each test case.

For example:

2
4
0
CONSTRAINTS:

An arrow is a set of the following symbols: '>>-->' or '<--<<'.
One symbol may belong to two arrows at the same time.
The number of test cases is 40.
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split("");
        var count = 0, i = 0
        for(i; i < line.length; i++) {
            if(line[i] === ">" && line[i + 1] === ">") {
                if(line[i + 2] === "-" && line[i + 3] === "-" && line[i + 4] === ">") {
                    count ++;
                }
            } else if(line[i] === "<" && line[i + 1] === "<") {
                if(line[i - 1] === "-" && line[i - 2] === "-" && line[i - 3] === "<") {
                    count ++;
                }
            }
        }
        console.log(count);
    }
});
/*
STRING ROTATION
CHALLENGE DESCRIPTION:

You are given two strings. Determine if the second string is a rotation of the first string.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains two comma separated strings. E.g.

Hello,lloHe
Basefont,tBasefon
OUTPUT SAMPLE:

Print out True/False if the second string is a rotation of the first. E.g.

True
True
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(",");
        var truthy = "False", test = '';
        for(var i = 0; i < line[1].length; i++) {
            if(line[0][0] === line[1][i]) {
                test = line[1].slice(i) + line[1].slice(0, i);
                if(test === line[0]) {
                    truthy = "True";
                }
            }
        }
        console.log(truthy);
    }
});
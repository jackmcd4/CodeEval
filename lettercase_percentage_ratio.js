/*
LETTERCASE PERCENTAGE RATIO

CHALLENGE DESCRIPTION:

Your task is to write a program which determines (calculates) the percentage ratio of lowercase and uppercase letters.

INPUT SAMPLE:

Your program should accept a file as its first argument. Each line of input contains a string with uppercase and lowercase letters.

For example:

thisTHIS
AAbbCCDDEE
N
UkJ
OUTPUT SAMPLE:

For each line of input, print the percentage ratio of uppercase and lowercase letters rounded to the second digit after the point.

For example:

lowercase: 50.00 uppercase: 50.00
lowercase: 20.00 uppercase: 80.00
lowercase: 0.00 uppercase: 100.00
lowercase: 33.33 uppercase: 66.67
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var up = 0, down = 0, i = 0, len = line.length;
        for(i = 0; i < line.length; i++) {
            if(line[i].toUpperCase() === line[i]) {
                up ++;
            } else {
                down ++;
            }
        }
        console.log("lowercase: " + ((down / len) * 100).toFixed(2) + " uppercase: " + ((up / len) * 100).toFixed(2));
    }
});
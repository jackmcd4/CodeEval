/*
LOWERCASE
CHALLENGE DESCRIPTION:

Given a string write a program to convert it into lowercase.

INPUT SAMPLE:

The first argument will be a path to a filename containing sentences, one per line. You can assume all characters are from the english language. E.g.

HELLO CODEEVAL
This is some text

OUTPUT SAMPLE:

Print to stdout, the lowercase version of the sentence, each on a new line. E.g.

hello codeeval
this is some text
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(line.toLowerCase());
    }
});
/*
CAPITALIZE WORDS
CHALLENGE DESCRIPTION:


Write a program which capitalizes the first letter of each word in a sentence.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

Hello world
javaScript language
a letter
1st thing
OUTPUT SAMPLE:

Print capitalized words in the following way.

Hello World
JavaScript Language
A Letter
1st Thing

*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var x;
        line = line.split(" ");
        for(var i = 0; i < line.length; i++){
            x = line[i];
            line[i] = x.slice(0, 1).toUpperCase() + x.slice(1);
        }
        console.log(line.join(" "));
    }
});
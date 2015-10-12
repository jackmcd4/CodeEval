/*
SWAP CASE
CHALLENGE DESCRIPTION:


Write a program which swaps letters' case in a sentence. All non-letter characters should remain the same.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

Hello world!
JavaScript language 1.8
A letter
OUTPUT SAMPLE:

Print results in the following way.

hELLO WORLD!
jAVAsCRIPT LANGUAGE 1.8
a LETTER
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split("");
        for(var i = 0; i < line.length; i++){
            if(line[i] === line[i].toUpperCase()){
                line[i] = line[i].toLowerCase();
            } else{
                line[i] = line[i].toUpperCase();
            }
        }
        console.log(line.join(''))
    }
});
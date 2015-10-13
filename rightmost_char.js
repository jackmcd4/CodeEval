/*
RIGHTMOST CHAR
CHALLENGE DESCRIPTION:

You are given a string 'S' and a character 't'. Print out the position of the rightmost occurrence of 't' (case matters) in 'S' or -1 if there is none. The position to be printed out is zero based.

INPUT SAMPLE:

The first argument will ba a path to a filename, containing a string and a character, comma delimited, one per line. Ignore all empty lines in the input file. E.g. 
Hello World,r
Hello CodeEval,E
OUTPUT SAMPLE:

Print out the zero based position of the character 't' in string 'S', one per line. Do NOT print out empty lines between your output. 
E.g.

8
10
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(",");
        var result = undefined;
        for(var i = line[0].length-1; i >= 0; i--){
            if(line[0][i] === line[1]){
                if(result === undefined){
                    result = i;
                }
            }
        }
        if(result === undefined){
            console.log(-1);
        } else {
            console.log(result);
        }
    }
});
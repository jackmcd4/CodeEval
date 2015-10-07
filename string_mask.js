/*
STRING MASK
CHALLENGE DESCRIPTION:

You’ve got a binary code which has to be buried among words in order to unconsciously pass the cipher. 
Create a program that would cover the word with a binary mask. If, while covering, a letter finds itself as 1, you have to change its register to the upper one, if it’s 0, leave it as it is. Words are always in lower case and in the same row with the binary mask.

INPUT SAMPLE:

The first argument is a path to a file. Each row contains a test case with a word and a binary code separated with space, inside of it. The length of each word is equal to the length of the binary code.

For example:

hello 11001
world 10000
cba 111
OUTPUT SAMPLE:

Print the encrypted words without binary code.

For example:

HEllO
World
CBA
CONSTRAINTS:

Words are from 1 to 20 letters long.
The number of test cases is 40.
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(" ");
        var res = '';
        for(var i = 0; i < line[0].length; i++) {
            if(line[1][i] === "1") {
                res += line[0][i].toUpperCase();
            } else {
                res += line[0][i];
            }
        }
        console.log(res);
    }
});
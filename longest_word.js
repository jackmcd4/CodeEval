/*
LONGEST WORD
CHALLENGE DESCRIPTION:

In this challenge you need to find the longest word in a sentence. If the sentence has more than one word of the same length you should pick the first one.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

some line with text
another line
Each line has one or more words. Each word is separated by space char.

OUTPUT SAMPLE:

Print the longest word in the following way.

some
another

*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(" ");
        var longest = undefined;
        for(var i = 0; i < line.length; i++){
            if(longest === undefined || line[i].length > longest.length){
                longest = line[i];
            }
        }
        console.log(longest);
    }
});
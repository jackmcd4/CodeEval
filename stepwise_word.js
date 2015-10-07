/*
STEPWISE WORD
CHALLENGE DESCRIPTION:

Print the longest word in a stepwise manner.

INPUT SAMPLE:

The first argument is a path to a file. Each line contains a test case with a list of words that have different or the same length.

For example:

cat dog hello
stop football play
music is my life
OUTPUT SAMPLE:

Find the longest word in each line and print it in one line in a stepwise manner. Separate each new step with a space. If there are several words of the same length and they are the longest, then print the first word from the list.

h *e **l ***l ****o
f *o **o ***t ****b *****a ******l *******l
m *u **s ***i ****c

CONSTRAINTS:

The word length is from 1 to 10 characters.
The number of words in a line is from 5 to 15.
If there are several words of the same length and they are the longest, then print the first word from the list.
The number of test cases is 40.
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(" ");
        var longest = '', curr = '', i = 0;
        for(i; i < line.length; i++) {
            curr = line[i];
            if(curr.length > longest.length) {
                longest = curr;
            }
        }
        curr = [];
        for(i = 0; i < longest.length; i++) {
            curr.push((Array(i + 1).join("*") + longest[i]));
        }
        console.log(curr.join(" "));
    }
});
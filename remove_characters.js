/*
REMOVE CHARACTERS

CHALLENGE DESCRIPTION:
Write a program which removes specific characters from a string.

INPUT SAMPLE:

The first argument is a path to a file. The file contains the source strings and the characters that need to be scrubbed. Each source string and characters you need to scrub are delimited by comma.

For example:

how are you, abc
hello world, def
OUTPUT SAMPLE:

Print to stdout the scrubbed strings, one per line. Ensure that there are no trailing empty spaces on each line you print.

For example:

how re you
hllo worl

*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(", ");
        var removal = line[1], res = '', i = 0;
        for(i; i < line[0].length; i++) {
            if(removal.indexOf(line[0][i]) === -1) {
                res += line[0][i];
            }
        }
        console.log(res)
    }
});
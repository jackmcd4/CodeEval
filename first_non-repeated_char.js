/*Write a program which finds the first non-repeated character in a string.

INPUT SAMPLE:

The first argument is a path to a file. The file contains strings.

For example:
yellow
tooth

OUTPUT SAMPLE:

Print to stdout the first non-repeated character, one per line.

For example:
y
h
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var obj = {}, i = 0, res = '';
        for(var i; i < line.length; i++) {
            if(obj[line[i]] === undefined) {
                obj[line[i]] = true;
            } else {
                obj[line[i]] = false;
            }
        }
        for(i = 0; i < line.length; i++) {
            if(res.length === 0) {
                if(obj[line[i]]) {
                    res = line[i];
                }
            }
        }
        console.log(res)
    }
});
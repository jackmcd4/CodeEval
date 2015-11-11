/*
STRING PERMUTATIONS

CHALLENGE DESCRIPTION:

Write a program which prints all the permutations of a string in alphabetical order. We consider that digits < upper case letters < lower case letters. The sorting should be performed in ascending order.

INPUT SAMPLE:

Your program should accept a file as its first argument. The file contains input strings, one per line.

For example:

hat
abc
Zu6
OUTPUT SAMPLE:

Print to stdout the permutations of the string separated by comma, in alphabetical order.

For example:

aht,ath,hat,hta,tah,tha
abc,acb,bac,bca,cab,cba
6Zu,6uZ,Z6u,Zu6,u6Z,uZ6

*/


var perm = function(str) {
    var outcomes = [];
    (function recurse(ana, s) {
        if(s === '') {
            outcomes.push(ana);
            return;
        }
        for(var i = 0; i < s.length; i++) {
            recurse(ana + s[i], s.slice(0, i) + s.slice(i + 1));
        }
    })('', str)
    outcomes = outcomes.sort();
    console.log(outcomes.join(','));
}
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        perm(line);
    }
});
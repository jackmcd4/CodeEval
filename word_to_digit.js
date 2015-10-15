/*
WORD TO DIGIT
CHALLENGE DESCRIPTION:


Having a string representation of a set of numbers you need to print this numbers.

All numbers are separated by semicolon. There are up to 20 numbers in one line. The numbers are "zero" to "nine"

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file is one test case. E.g.

zero;two;five;seven;eight;four
three;seven;eight;nine;two

OUTPUT SAMPLE:

Print numbers in the following way:

025784
37892
*/

var strToNum = function(str){
    var firstLet = str[0];
    if(str.length === 3){
        if(firstLet === "o"){
            return 1;
        } else if(firstLet === "t"){
            return 2;
        } else {
            return 6;
        }
    } else if(str.length === 4){
        if(firstLet === "n"){
            return 9;
        } else if(firstLet === "z"){
            return 0;
        } else {
            if(str[1] === "o"){
                return 4;
            } else {
                return 5;
            }
        }
    } else if(str.length === 5){
        if(firstLet === "e"){
            return 8;
        } else if(firstLet === "s"){
            return 7;
        } else {
            return 3;
        }
    }
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(";");
        var result = "";
        for(var i = 0; i < line.length; i++){
            result += strToNum(line[i]).toString();
        }
        console.log(result);
    }
});
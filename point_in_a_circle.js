/*
POINT IN CIRCLE
CHALLENGE DESCRIPTION:

Having coordinates of the center of a circle, it's radius and coordinates of a point you need to define whether this point is located inside of this circle.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

Center: (2.12, -3.48); Radius: 17.22; Point: (16.21, -5)
Center: (5.05, -11); Radius: 21.2; Point: (-31, -45)
Center: (-9.86, 1.95); Radius: 47.28; Point: (6.03, -6.42)
All numbers in input are between -100 and 100

OUTPUT SAMPLE:

Print results in the following way.

true
false
true
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(";");
        var centerX = +line[0].split(",")[0].split("(")[1];
        var centerY = line[0].split(",")[1];
        centerY = +centerY.slice(0, centerY.length - 1);
        var rad = +line[1].split(": ")[1];
        var pointX = +line[2].split(",")[0].split("(")[1];
        var pointY = line[2].split(",")[1];
        pointY = +pointY.slice(0, pointY.length - 1);
        var d = Math.sqrt((centerX - pointX)*(centerX - pointX) + (centerY - pointY)*(centerY - pointY));
        if(d < rad) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
});
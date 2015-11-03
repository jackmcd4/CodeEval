/*
SUDOKU
CHALLENGE DESCRIPTION:


Sudoku is a number-based logic puzzle. It typically comprises of a 9*9 grid with digits so that each column, each row and each of the nine 3*3 sub-grids that compose the grid contains all the digits from 1 to 9. For this challenge, you will be given an N*N grid populated with numbers from 1 through N and you have to determine if it is a valid sudoku solution. You may assume that N will be either 4 or 9. The grid can be divided into square regions of equal size, where the size of a region is equal to the square root of a side of the entire grid. Thus for a 9*9 grid there would be 9 regions of size 3*3 each.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains the value of N, a semicolon and the sqaure matrix of integers in row major form, comma delimited. E.g.

4;1,4,2,3,2,3,1,4,4,2,3,1,3,1,4,2
4;2,1,3,2,3,2,1,4,1,4,2,3,2,3,4,1
OUTPUT SAMPLE:

Print out True/False if the grid is a valid sudoku layout. E.g.

True
False
*/



//95% complete
var colConflict = function(nums, w) {
    var col = [];
    for(var i = 0; i < w; i++) {
        col = [];
        for(var j = 0; j < w; j++) {
            col.push(nums[j * w + i]);
        }
        col = col.sort(function(a, b){return a - b});
        for(var k = 0; k < col.length; k++) {
            if(col[k] === col[k + 1]) {
                return true;
            }
        }
    } 
    return false;
}

var rowConflict = function(nums, w) {
    var count = 0, row = [];
    for(var i = 0; i <= nums.length; i++) {
        if(count === w) {
            row = row.sort(function(a, b) {
                return a - b;
            });
            for(var k = 0; k < row.length; k++) {
                if(row[k] === row[k + 1]) {
                    return true;
                }
            }
            count = 0;
            row = [];
        } 
        row.push(nums[i]);
        count++;
    }
    return false;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(";");
        var values = line[1].split(","), w = +line[0];
        if(!rowConflict(values, w) && !colConflict(values, w)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }
});
/*
SWAP ELEMENTS
CHALLENGE DESCRIPTION:

You are given a list of numbers which is supplemented with positions that have to be swapped.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

1 2 3 4 5 6 7 8 9 : 0-8
1 2 3 4 5 6 7 8 9 10 : 0-1, 1-3
As you can see a colon separates numbers with positions. 
Positions start with 0. 
You have to process positions left to right. In the example above (2nd line) first you process 0-1, then 1-3.

OUTPUT SAMPLE:

Print the lists in the following way.

9 2 3 4 5 6 7 8 1
2 4 3 1 5 6 7 8 9 10
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(":");
        var switches = line[1].split(",");
        var nums = line[0].split(" ");
        var hold;
        var curr;
        for(var i = 0; i < switches.length; i++){
            curr = switches[i].split("-");
            hold = nums[+curr[0]];
            nums[+curr[0]] = nums[+curr[1]];
            nums[+curr[1]] = hold;
        }
        console.log(nums.join(" "));
    }
});
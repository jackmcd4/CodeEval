/*
MINIMUM COINS
CHALLENGE DESCRIPTION:


You are given 3 coins of value 1, 3 and 5. You are also given a total which you have to arrive at. Find the minimum number of coins to arrive at it.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains a positive integer number which represents the total you have to arrive at. E.g.

11
20

OUTPUT SAMPLE:

Print out the minimum number of coins required to arrive at the total. E.g.

3
4
*/

var minCoins = function(num) {
    var count = 0;
    while(num > 0) {
        if(num - 5 >= 0) {
            num-=5;
            count++;
        } else if(num - 3 >= 0) {
            num-=3;
            count++;
        } else {
            num-=1;
            count++;
        }
    }
    return count;
}
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(minCoins(+line));
    }
});
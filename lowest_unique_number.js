/*
LOWEST UNIQUE NUMBER
CHALLENGE DESCRIPTION:

There is a game where each player picks a number from 1 to 9, writes it on a paper and gives to a guide. A player wins if his number is the lowest unique. We may have 10-20 players in our game.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename.

You're a guide and you're given a set of numbers from players for the round of game. E.g. 2 rounds of the game look this way:

3 3 9 1 6 5 8 1 5 3
9 2 9 9 1 8 8 8 2 1 1

OUTPUT SAMPLE:

Print a winner's position or 0 in case there is no winner. In the first line of input sample the lowest unique number is 6. So player 5 wins.

5
0
*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(" ");
        var obj = {};
        var low = Number.POSITIVE_INFINITY;
        var curr = undefined;
        var ind = 0;
        for(var i = 0; i < line.length; i++){
            curr = line[i];
            if(obj[curr] === undefined){
                obj[curr] = [true, i + 1];
            } else {
                obj[curr] = false;
            }
        }
        for(var key in obj){
            curr = obj[key];
            if(curr.constructor === Array){
                if(+(key) < low){
                    low = +(key);
                    ind = curr[1];
                }
            }
        }
        console.log(ind)
    }
});

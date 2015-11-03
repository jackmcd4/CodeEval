/*
CASH REGISTER
CHALLENGE DESCRIPTION:


The goal of this challenge is to design a cash register program. You will be given two float numbers. The first is the purchase price (PP) of the item. The second is the cash (CH) given by the customer. Your register currently has the following bills/coins within it:

'PENNY': .01,
'NICKEL': .05,
'DIME': .10,
'QUARTER': .25,
'HALF DOLLAR': .50,
'ONE': 1.00,
'TWO': 2.00,
'FIVE': 5.00,
'TEN': 10.00,
'TWENTY': 20.00,
'FIFTY': 50.00,
'ONE HUNDRED': 100.00
The aim of the program is to calculate the change that has to be returned to the customer.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. The input file contains several lines. Each line is one test case. Each line contains two numbers which are separated by a semicolon. The first is the Purchase price (PP) and the second is the cash(CH) given by the customer. eg.

15.94;16.00
17;16
35;35
45;50
OUTPUT SAMPLE:

For each set of input produce a single line of output which is the change to be returned to the customer. In case the CH < PP, print out ERROR. If CH == PP, print out ZERO. For all other cases print the amount that needs to be returned, in terms of the currency values provided. The output should be sorted in highest-to-lowest order (DIME,NICKEL,PENNY). eg.

NICKEL,PENNY
ERROR
ZERO
FIVE
*/

var change = [
['PENNY', .01],
['NICKEL', .05],
['DIME', .10],
['QUARTER', .25],
['HALF DOLLAR', .50],
['ONE', 1.00],
['TWO', 2.00],
['FIVE', 5.00],
['TEN', 10.00],
['TWENTY', 20.00],
['FIFTY', 50.00],
['ONE HUNDRED', 100.00]];
var calcChange = function(line) {
    line = line.split(";");
    var price = line[0], cash = line[1], diff = ((+cash) - (+price)).toFixed(2), res = [], curr = change.length - 1;
    if(diff < 0) {
        console.log("ERROR");
    } else if(diff.toString() === '0.00') {
        console.log("ZERO");
    } else {
        while(diff > 0) {
            for(curr; curr >= 0; curr--) {
                if(diff - change[curr][1] >= 0) {
                    diff = (diff - change[curr][1]).toFixed(2);
                    res.push(change[curr][0]);
                    break;
                }
            }
        }
        console.log(res.join(","))
    }
}
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        calcChange(line);
    }
});



/*
Write a program which prints the endianness of the system.

INPUT SAMPLE:

There is no input for this program.

OUTPUT SAMPLE:

Print to stdout the endianness, wheather it is LittleEndian or BigEndian.

For example:
BigEndian
*/

var checkEndian = function() {
    var byteRoom = new ArrayBuffer(4);
     //creates an array with a reserve of 4 bytes
    var eightBit = new Uint8Array(byteRoom);
     //creates a view of the 4-byte buffer with unsigned integer paceholders (0's)
    var thirtyTwoBit = new Uint32Array(byteRoom);
     //creates a view of the 4-byte buffer so that when b adds numbers to its' 8-bit, it shows up in the 32-bit
    eightBit[0] = 0xa1;
     //by setting these hex values onto b through a, we change c's 32-bit value
    eightBit[1] = 0xb2;
    eightBit[2] = 0xc3;
    eightBit[3] = 0xd4;
    
    if(thirtyTwoBit[0] === 0xa1b2c3d4) {
        console.log("BigEndian");
    } else if(thirtyTwoBit[0] === 0xd4c3b2a1) {
        console.log("LittleEndian");
    }
}();
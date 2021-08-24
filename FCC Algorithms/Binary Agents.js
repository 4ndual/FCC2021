/* Binary AgentsPassed
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    /*
    1 split 
    2 map
    3 convert each element to charcode using "parseInt(x,2)"
    4 convert charcode to letters usign "String.fromCharCode()"
    5 join
    */


    return str.split(" ").map(x=>String.fromCharCode(parseInt(x,2))).join("");
    
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
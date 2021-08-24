/* Spinal Tap Case

Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.

*/


function spinalCase(str) {

    //insert dashes before each uppercase word(except the first one)
    //replace all not alphanumeric characters with dashes 
    //Convert to lowercase
     
    return str.replace(/(.)([A-Z])/g,"$1-$2").replace(/(\W|_)+/g,"-").toLowerCase();
  }
  
  console.log(spinalCase('The_Andy_Griffith_Show'));
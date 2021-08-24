/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
    //create array with the whole abc to compare
    let abc="abcdefghijklmnopqrstuvwxyz".split("")
  
    //slice abc in order to cover the same range than the str
    abc=abc.slice(abc.indexOf(str[0]) ,abc.indexOf(str[str.length-1]))
  
   //compare each letter one by one
   //if one letter doesn't coincide return it
    return abc.find((x,i)=>!(x==str[i]));
  }
  
  console.log(fearNotLetter("stvwx"));


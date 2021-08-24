/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are 
shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. 
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

/*map solution*/

function rot13(str) {
  
    let abc="ABCDEFGHIJKLM .,!¡¿?<>".split("")
    let nop="NOPQRSTUVWXYZ .,!¡¿?<>".split("")
    
    //map all the index of str in nop with abc and vice verse
    return str.split("").map(x=>abc.indexOf(x)==-1?abc[nop.indexOf(x)]:nop[abc.indexOf(x)]).join("");
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));

  /*Regex solution*/


function rot13(str) {
  
    let abc="ABCDEFGHIJKLM".split("")
    let nop="NOPQRSTUVWXYZ".split("")
  
    /*Here a optimization is almost the same code but i realize
    that is use replace/regex instead of map i dont need to
    include the noalphanumeric characters in my arrays(abc, nop)
    and also id dont need to use split and join*/
    
    //replace all the index of str in nop with abc and vice verse
    
    return str.replace(/(\w)/g,(x)=> abc.indexOf(x)==-1?abc[nop.indexOf(x)]:nop[abc.indexOf(x)])
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));
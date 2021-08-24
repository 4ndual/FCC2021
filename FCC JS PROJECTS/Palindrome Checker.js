/* Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/





function palindrome(str) {

    //Delete all not alphanumeric characters and set lowercase
    str=str.replace(/\W|-|_/g,"").toLowerCase()
    
    /* in order to use test method you need to covert the var into
    a regex object usign  RegExp()*/
  
    //reverse string and convert into a regex object
    let re = new RegExp(str.split("").reverse().join(""), "g");
  
    //test if the reverse of str is equal to str
    return (re).test(str);
  }
  
  
  
  console.log(palindrome("race car"));
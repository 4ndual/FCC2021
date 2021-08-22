/*Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects 
one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) 
should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/


function addTogether(a,b) {

  //using shortcut beccause built-int methods syntax of js is awfull
  let isInt=Number.isInteger

  
  if (isInt(a)){
    
    //if b is defined. check if b is int, if not int return undefined, if int return a+b
    if(b){ return isInt(b)?a+b:undefined }

    /*
    
    if b is not defined Curr the function

    check if the parameter(c) of the curried fucntion is defined

    if c is defined. check if c is int, if not int return undefined, if int return a+c

    if c if undefined return undefined

    */

    return function (c){ return isInt(c)?a+c:undefined }

  }

  //if a is not integer return undefined

}

console.log(addTogether(2, "3"));a
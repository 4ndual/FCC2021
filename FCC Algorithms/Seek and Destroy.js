
/* Seek and DestroyPassed
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array 
that are of the same value as these arguments.

Note: You have to use the arguments object.

*/

function destroyer(arr,...des) {
    //use some in order compare all element in "des" whit each element i arr
     //if some element in "des" is equal to some element in array return false
    //filter the array in order to destroy the elements in "des" that are in array
    
   
    return arr.filter(x=>!des.some(y=>y==x));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
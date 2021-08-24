/*Drop it
Given the array arr, iterate through and remove each element starting 
from the first element (the 0 index) until the function func returns 
true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {

    //find index in arr where the condition of "func" is met  
    let i=arr.findIndex(x=>func(x))
  
    //slice from the index to the end of arr (if index is -1, then return a empty array)and return
    return arr.slice(i>=0?i:arr.length,) ;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
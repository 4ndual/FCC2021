/*
Diff Two Arrays
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

*/


function diffArray(arr1, arr2) {
  
  //create a new array that it contains all elements in both array
  //filter the new array against arr1 and arr2 using includes
  //if includes return false for arr1 or arr 2 then true 

  return [...arr1,...arr2].filter(x=> !arr1.includes(x) || !arr2.includes(x));

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
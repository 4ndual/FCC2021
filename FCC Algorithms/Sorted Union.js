/*Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.*/

function uniteUnique(arr,...arr2) {

    // iter through arr2 bc the number of args is indeterminated
   
     for(let i in arr2){
   
   //filter all arr2 against arr
   //use every to check that the number is not in arr before push
    arr.push(...arr2[i].filter(x=> arr.every(y=>!(y==x))))
   
     }
   
     return arr;
   }
   
   console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
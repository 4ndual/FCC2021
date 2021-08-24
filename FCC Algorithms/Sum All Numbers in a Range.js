/*
Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all 
the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 
because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

/* recursive solution */

function sumAllRecursive(arr,sort=false) {

  //base case
    if(arr[0]==arr[1]){

      return arr[1]

    }

  //sort from less to more if this is the first call (sort=false)
    !sort?arr.sort((a,b)=>a-b):"already sorted"
  
  //arr[1]-1 in order to get the base case then  sum arr[1] in all calls of the function
      return sumAllRecursive([arr[0],arr[1]-1],true)+arr[1];

  }
  
  sumAllRecursive([4, 1])


/* Sequence solution */

function sumAll(arr) {
    //sort from less to more
    
    arr.sort((a,b)=>a-b)
    
    //create a array sequence with the same long than the range provided
    //map adding arr[0] in order to create array between the range provided
    //use reduce to sum each element of the array in the range
    
    return [...Array(arr[1]-arr[0]+1).keys()].map(i => i+ arr[0]).reduce((acc,e)=>acc+e);
  }
  
    sumAll([2, 10])
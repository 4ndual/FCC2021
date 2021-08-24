/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly
 divided by both, as well as by all sequential numbers in the range between 
 hese parameters.

The range will be an array of two numbers that will not necessarily 
be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
 that is also evenly divisible by all numbers between 1 and 3. 
 The answer here would be 6.*/


 function smallestCommons(arr) {
    
  //sort art from lower to higher 
   arr.sort((a,b)=>a-b)
   
   //create a new array with all number in range from arr[0] to arr[1]
   let newArr=[...Array(arr[1]-arr[0]+1).keys()].map(i => i+ arr[0])
   
   let i=2
   //loop continues until "i" is equal to the LCM of all numbers in newArr
   while(i++){
       
     
     // i is multiple of "e"(element in the array) if the remainder of i divided by e is 0
     //check if i is the LCM for all numbers in newArr
     //if not then i=i+1 and try again until the condition is met 
      if(newArr.every(e=>i%e==0)){

       //return LCM
        return i
 
      }
 
   }
   
 }
 
 
 console.log(smallestCommons([1,5]));
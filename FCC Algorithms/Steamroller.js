/* Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
/* recursive solution*/

    /*recursive solution*/

    function steamrollArray(arr) {


        /*base case*/
        //if no object in arr is iterable
        if (arr.every(x=> !(Symbol.iterator in Object(x) ) ) ){
        
            return arr
        
        }
        
          //callback while spreading arr
          return steamrollArray([].concat(...arr))
        }
        
        console.log(steamrollArray([1, {}, [3, [[4]]]]));

/*map solution*/

function mapSteamrollArray(arr) {


    let condition=true
    
    /*When I started I used "arr.some(x=> Symbol.iterator in Object(x))" as 
    the condition for the "while" but I thought it would be a bad algorithm 
    if I had to scan the array twice in each loop iteration so I decided to add 
    a variable "condition" for the function "map" also do the work that "some" did 
    before and only have to scan the array once per iteration...
    if not a very efficient algoritmt anyways i just tried to solve it without recursion 
    */

     while(condition){

       condition=false
    
       
       arr=[].concat(...arr.map(x=>{
    
        //if the object is iterable spread an return
        if(Symbol.iterator in Object(x)){
            
          condition=true
          
          return [].concat(...x)
    
        }
    
        return x
    
    
      } ) ) ;
     
       
     }
      
      return arr
    }
    
    console.log(mapSteamrollArray([1, {}, [3, [[4]]]]));



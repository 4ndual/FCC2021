/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/


function convertToRoman(num) {

    //Convert numbers to string in order to acces the keys
    //Convert to array in order to map
    /*reverse Because I made the dictionary backwards by accident and I'm too lazy to accommodate it*/
     let arr=num.toString().split("").reverse()
    
     let digits=[
      
      {
    
       0:"",
       1:"I",
       2:"II",
       3:"III",
       4:"IV",
       5:"V",
       6:"VI",
       7:"VII",
       8:"VIII",
       9:"IX",
    
     }
    ,
      {
    
        0:"",
       1:"X",
       2:"XX",
       3:"XXX",
       4:"XL",
       5:"L",
       6:"LX",
       7:"LXX",
       8:"LXXX",
       9:"XC"
     
     }
    
    ,
    
     {
    
       0:"",
       1:"C",
       2:"CC",
       3:"CCC",
       4:"CD",
       5:"D",
       6:"DC",
       7:"DCC",
       8:"DCCC",
       9:"CM",
    
     }
     
     ,
     
     {
        0:"",
       1:"M",
       2:"MM",
       3:"MMM",
     }
     ]
    
     //based in the number of digits map the numbers with their keys
     // join to convert a string
    
     return arr.map((x,i)=>digits[i][x]).reverse().join("")
    
    }
    
    
    console.log(convertToRoman(45));
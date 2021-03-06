/*
Map the DebrisPassed
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

*/

function orbitalPeriod(arr) {

    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    // not much to comment just map and apply math stuff for all elements in arr
    return arr.map(x=> {
    
    //a=avgAlt+earthRadius
    // formula: 2π√(a³/GM)
     return {name:x.name, orbitalPeriod: Math.round(2*Math.PI*Math.sqrt(((x.avgAlt+earthRadius)**3)/GM))}
      
      
      })
  ;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
/*
Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument),
 because it contains the name and its value, 
 that was passed on as the second argument.

 */


 function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
  // Filter the collection
  // compare with source keys using every
  // if some value of source is different to the vale of the same key in collection filter
  
  arr=collection.filter(o=>Object.keys(source).every(k=>o[k]==source[k]))
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
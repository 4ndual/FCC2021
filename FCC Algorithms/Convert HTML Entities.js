/*
Convert HTML EntitiesPassed
Convert the characters &, <, >, " (double quote), and 
' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {

    let entities={"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;"}

    //replace entities keys found in str with its value its value in entities 
    return str.replace(/&|<|>|"|'/g,x=>entities[x]);
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
/*
Pig Latin
Pig Latin is a way of altering English Words. 
The rules are as follows:

- If a word begins with a consonant, take the first consonant 
or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. 
Input strings are guaranteed to be English words in all lowercase.



*/





function translatePigLatin(str) {

    //replace 1:if the word start with vowel capture the whole word and add "way"
    //replace 2:if the word star with consonants capture the consonants and capture the rest of the word
    //add the vowel to the end of the rest of the word an add "ay"
   
     return str.replace(/(^[aeiou].*)/,"$1way").replace(/^([^aeiou]+)(.*)/,"$2$1ay");
   
   }
   
   console.log(translatePigLatin("glove"));
   console.log(translatePigLatin("algorithm"));
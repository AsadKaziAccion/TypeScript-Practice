//Write a TypeScript program to remove spaces from given string.

let sentence = "hello playwright automation";

// Approach 1: Using replaceAll() (Cleanest approach)
let noSpaces1: string = sentence.replaceAll(" ", "");
console.log("Using replaceAll():", noSpaces1); 
// Output: "helloplaywrightautomation"

// Approach 2: Using a global regular expression / /g (Most widely compatible)
let noSpaces2: string = sentence.replace(/ /g, "");
console.log("Using regex replace:", noSpaces2);
// Output: "helloplaywrightautomation"
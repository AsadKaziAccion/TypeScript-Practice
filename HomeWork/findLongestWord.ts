// *📝 Assignment 28: Find the Longest Word in a Sentence*
 
// Input: let sentence = "Playwright makes automation easy automation”;
 
// Expected Output:
// Longest Word: automation
// Length: 10
 
// Challenge: What if two words have the same maximum length? Print both!

let sentence = "Playwright makes automation easy automation";
let words = sentence.split(" ");
let longestWords: string[] = [];
let maxLength = 0;
for (let word of words) 
{
  if (word.length > maxLength) 
  {
    longestWords = [word];
    maxLength = word.length;
  } 
  else if (word.length === maxLength) 
  {
    longestWords.push(word);
  }
}
console.log("Longest Word(s):", longestWords);
console.log("Length:", maxLength);
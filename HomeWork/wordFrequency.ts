//Write a TypeScript program to count home many times each word appears in a sentence.

let sentence1 = "java typescript java javascript";
let words = sentence1.split(" ");

// Define an object to store the word frequencies
let wordCount: Record<string, number> = {};

for (let word of words) 
{
    if (wordCount[word]) 
    {
        wordCount[word]++; // Increment if the word already exists
    } 
    else 
    {
        wordCount[word] = 1; // Initialize with 1 if it's the first time seeing the word
    }
}

console.log(wordCount);
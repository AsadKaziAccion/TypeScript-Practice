//Write a TypeScript program to count how many times each character appears in the given string.
//Expected Output:
// a = 2
// u = 1
// t = 2
// o = 2
// m = 1
// i = 1
// n = 1
let word2 = "automation";
let charCount: { [key: string]: number } = {};

for (let i = 0; i < word2.length; i++) 
{
    let char = word2[i];
    charCount[char] = (charCount[char] || 0) + 1;
}

for (let [char, count] of Object.entries(charCount)) 
{
    console.log(`${char} = ${count}`);
}

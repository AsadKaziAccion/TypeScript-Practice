//Write a TypeScript program to Check whether both strings contain the same characters, regardless of their order.
//Expected Output: true
let firstWord = "listen";
let secondWord = "silent";
let isAnagram = true;

if (firstWord.length !== secondWord.length) 
{
    isAnagram = false;
} 
else 
{
    let charCount: { [key: string]: number } = {};
    for (let i = 0; i < firstWord.length; i++) 
    {
        let char = firstWord[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < secondWord.length; i++) 
    {
        let char = secondWord[i];
        charCount[char] = (charCount[char] || 0) - 1;
    }
    for (let [char, count] of Object.entries(charCount)) 
    {
        if (count !== 0) 
        {
            isAnagram = false;
            break;
        }
    }
}
console.log(isAnagram);
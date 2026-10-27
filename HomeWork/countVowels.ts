//Write a typeScript program to count the number of vowels in a string.
//Expected output: The number of vowels in the string is: 6
let word = "automation";
let count = 0;

for (let i = 0; i < word.length; i++) 
{
    let char = word[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
    {
        count++;
    }
}

console.log(`The number of vowels in the string is: ${count}`);
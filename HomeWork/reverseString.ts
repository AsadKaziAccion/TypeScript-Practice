//Write a typeScript program to reverse a string without using built-in reverse method.
let word: string = "Playwright";
let reversedStr: string = "";

for (let i = word.length - 1; i >= 0; i--) 
{
    reversedStr += word[i];
}

console.log(reversedStr);
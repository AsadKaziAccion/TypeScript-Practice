//Write a typeScript program to check if a string is a palindrome without using built-in reverse method.
//Expected output: madam is a palindrome
let word1 = "madam";
let temp = "";

for (let i = word1.length - 1; i >= 0; i--) 
{
    temp += word1[i];
}

if (word1 === temp) 
{
    console.log(word1 + " is a palindrome");
}

else 
{
    console.log(word1 + " is not a palindrome");
}
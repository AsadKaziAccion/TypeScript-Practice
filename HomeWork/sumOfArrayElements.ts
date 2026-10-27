//Write a program to calculate the sum of all elements in an array using for...of loop in TypeScript.
let input = [5, 10, 15, 20];
let sum = 0;

for (let i of input) 
{
    sum += i; //sum = sum + i
}

console.log("Sum of array elements:", sum);
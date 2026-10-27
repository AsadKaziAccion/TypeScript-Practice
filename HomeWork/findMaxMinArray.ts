//Find Maximum and Minimum number in an Array
//Array [25, 10, 45, 5, 30]
let arr = [25, 10, 45, 5, 30];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) 
{
    if (arr[i] > max) 
    {
        max = arr[i];
    }
    if (arr[i] < min) 
    {
        min = arr[i];
    }
}

console.log("Maximum number:", max);
console.log("Minimum number:", min);
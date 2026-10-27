//Find the second largest number in the given array [10, 5, 20, 8]
let numbers = [10, 5, 20, 8];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] > largest) 
    {
        secondLargest = largest;
        largest = numbers[i];
    } 
    else if (numbers[i] > secondLargest && numbers[i] !== largest) 
    {
        secondLargest = numbers[i];
    }
}
console.log("Second largest number:", secondLargest);
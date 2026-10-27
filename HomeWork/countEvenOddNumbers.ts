//Write a program to count even and odd numbers in the given array using a loop
//let arr= [12, 7, 9, 24, 18, 5,31, 40,16, 11]
let arr: number[] = [12, 7, 9, 24, 18, 5, 31, 40, 16, 11];
let evenCount: number = 0;
let oddCount: number = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even numbers: ", evenCount);
console.log("Odd numbers: ", oddCount);
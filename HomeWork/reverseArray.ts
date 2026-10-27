//Write a program to reverse the given array uaing a loop without using a built-in reverse method
//arr= [10, 20, 30, 40, 50, 60, 70];
let arr: number[] = [10, 20, 30, 40, 50, 60, 70];
let reversedArr: number[] = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

console.log("Original Array: ", arr);
console.log("Reversed Array: ", reversedArr);
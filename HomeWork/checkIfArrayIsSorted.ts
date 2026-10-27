//Write a program to check wheter an array is sorted in ascending order or not. Print true if it is sorted otherwise print false.
let arr = [1, 2, 3, 4];
let isSorted = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        isSorted = false;
        break;
    }
}
console.log(isSorted);
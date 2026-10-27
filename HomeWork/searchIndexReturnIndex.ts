//Write a program to search for the number 30 in an array and print it's index. If number not found then print -1.
//arr= [10, 20, 30, 40];
let arr = [10, 20, 30, 40];
let index = arr.indexOf(30);
console.log(index);

//Without using built-in indexOf method
let searchNumber = 30;
let foundIndex = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchNumber) {
        foundIndex = i;
        break;
    }
}
console.log(foundIndex);
//Write a program to remove duplicate elements from the given array [1, 2, 2, 3, 3]
let arr1 = [1, 2, 2, 3, 3, 4];
let uniqueArr = [...new Set(arr1)];
console.log("Array with duplicates removed:", uniqueArr);

//Any other way to write the program to remove duplicate elements from the given array [1, 2, 2, 3, 3]
//Using filter method
let arr2 = [1, 2, 2, 3, 3, 4];
let uniqueArr2 = arr2.filter((value, index, self) => self.indexOf(value) === index);
console.log("Array with duplicates removed using filter:", uniqueArr2);

//Another way to write the program to remove duplicate elements from the given array [1, 2, 2, 3, 3]- Using for loop
let arr3 = [1, 2, 2, 3, 3, 4];
let uniqueArr3: number[] = [];
for (let i = 0; i < arr3.length; i++) 
{
    if (uniqueArr3.indexOf(arr3[i]) === -1) 
    {
        uniqueArr3.push(arr3[i]);
    }
}
console.log("Array with duplicates removed using for loop:", uniqueArr3);
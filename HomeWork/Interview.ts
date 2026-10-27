//Write a program to separate numbers, characters, and special characters from a given string in TypeScript.
// String = "45#%%%%435435354thgfhgf443643643gfjgfjf;
let inputString: string = "45#%%%%435435354thgfhgf443643643gfjgfjf";
let numbers: string[] = [];
let characters: string[] = [];
let specialCharacters: string[] = [];

for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (/\d/.test(char)) {
        numbers.push(char);
    } else if (/[a-zA-Z]/.test(char)) {
        characters.push(char);
    } else {
        specialCharacters.push(char);
    }
}

console.log("Numbers: ", numbers.join(''));
console.log("Characters: ", characters.join(''));
console.log("Special Characters: ", specialCharacters.join(''));

//Write a TypeScript program to find and print the first character that appears only once in the string.
let word = "automation";
let charCount: { [key: string]: number } = {};

for (let i = 0; i < word.length; i++) {
    let char = word[i];
    charCount[char] = (charCount[char] || 0) + 1;
}

for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (charCount[char] === 1) {
        console.log(`The first non-repeating character is: ${char}`);
        break;
    }
}

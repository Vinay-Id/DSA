function countWords(str) {
    let words = str.trim().split(/\s+/);
    // let words = str.trim().split(" ");
    return words.length;
}

let sentence = "Hello world";
console.log("Number of words:", countWords(sentence)); // Output: 2

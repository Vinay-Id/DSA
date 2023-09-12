// In this exercise, we will write code to determine if two strings are an anagram of each other. Two strings are an anagram if you can rearrange the letters of one string to make the other. For example, the words elbow and below are anagrams of each other. There are two approaches we could take to this problem

// Attempt to change the first word into the second
// Check if both words contain the exact same letters
// The second attempt is much easier to compute and gives a valid result, so we will choose it. The code for this is shown below.

var word1 = "elbow";

var word2 = "below";

if (word1.length != word2.length) {
  console.log("Not an anagram");
} else {
  let str1 = word1.split("").sort().join("");

  let str2 = word2.split("").sort().join("");

  if (str1 === str2) {
    console.log("Is anagram");
  } else {
    console.log("Is not anagram");
  }
}

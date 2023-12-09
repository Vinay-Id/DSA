// Example 1:
// Input: s = "aaabc"
// Output: 3
// Example 2:
// Input: s = "cbbd"
// Output: 3
 

var minimizedStringLength = function(s) {
    let arr=[...new Set(s)]
    return arr.length;
};
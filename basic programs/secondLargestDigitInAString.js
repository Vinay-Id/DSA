// Example 1:
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// Example 2:
// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 


var secondHighest = function(s) {
    let highest = -1;
    let secondHighest = -1;
    
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            let num = Number(char);
            if (num > highest) {
                secondHighest = highest;
                highest = num;
            } else if (num > secondHighest && num < highest) {
                secondHighest = num;
            }
        }
    }
    
    return secondHighest;
};
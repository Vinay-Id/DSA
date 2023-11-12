// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

var subtractProductAndSum = function(n) {
    let num=`${n}`.split('').map((ele)=>parseInt(ele));
    let n1=num.reduce((acc,ele)=>acc*ele);
    let n2=num.reduce((acc,ele)=>acc+ele);
    return n1-n2;
};
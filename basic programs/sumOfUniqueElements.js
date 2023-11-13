// Example 1:
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:
// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

// var sumOfUnique = function (nums) {
//   let arr = nums.sort((a, b) => a - b);
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] == arr[i] || arr[i - 1] == arr[i]) {
//       continue;
//     } else {
//       temp.push(arr[i]);
//     }
//   }
//   return temp.reduce((acc, ele) => acc + ele);
// };
// console.log(sumOfUnique([1, 2, 3, 2]));
var sumOfUnique = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const uniqueNumbers = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (
      sortedNums[i + 1] == sortedNums[i] ||
      sortedNums[i - 1] == sortedNums[i]
    ) {
      continue;
    } else {
      uniqueNumbers.push(currentNum);
    }
  }

  return uniqueNumbers.reduce((sum, num) => sum + num, 0);
};

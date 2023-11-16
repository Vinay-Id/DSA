// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.


const sortPeople = function (names, heights) {
  const copyHeights = [...heights];
  copyHeights.sort((a, b) => b - a);
  const result = [];

  for (let i = 0; i < heights.length; i++) {
    result.push(names[heights.indexOf(copyHeights[i])]);
  }

  return result;
};

// var sortPeople = function (names, heights) {
//     let obj = {};
//     for (let i = 0; i < names.length; i++) {
//       obj[heights[i]] = names[i];
//     }
//     return heights.sort((a, b) => b-a).map((ele) => obj[ele]);

//   };

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));

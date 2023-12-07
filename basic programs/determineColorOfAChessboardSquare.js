// Example 1:
// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
// Example 2:
// Input: coordinates = "h3"
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
// Example 3:
// Input: coordinates = "c7"
// Output: false

var squareIsWhite = function (coordinates) {
  let str = "abcdefgh";
  obj = {};
  let flag = false;
  for (let j = 0; j < str.length; j++) {
    for (let i = 1; i <= 8; i++) {
      obj[str[j] + i] = flag;
      flag = !flag;
    }
    flag = !flag;
  }
  //   return obj[coordinates];
  console.log(obj);
};
squareIsWhite();

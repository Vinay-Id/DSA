// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
// Example 2:

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

var removeTrailingZeros = function (num) {
  let arr = num.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      arr.pop();
    } else {
      return arr.join("");
    }
  }
};

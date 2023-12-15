// Example 1:
// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:
// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:
// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length == 0;
  } else {
    return Object.keys(obj).length == 0;
  }
};

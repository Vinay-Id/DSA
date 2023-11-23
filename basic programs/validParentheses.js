// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (s) {
  const stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      if (stack.length === 0) {
        return false;
      }

      const topOfStack = stack.pop();
      const openingBracketIndex = openingBrackets.indexOf(topOfStack);
      const correspondingClosingBracket = closingBrackets[openingBracketIndex];

      if (correspondingClosingBracket !== currentBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

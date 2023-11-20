// Example 1:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
// Example 2:
// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  let ruleIndex;
  if (ruleKey === "type") {
    ruleIndex = 0;
  } else if (ruleKey === "color") {
    ruleIndex = 1;
  } else if (ruleKey === "name") {
    ruleIndex = 2;
  }

  for (const item of items) {
    if (item[ruleIndex] === ruleValue) {
      count++;
    }
  }

  return count;
};

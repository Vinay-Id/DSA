/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
  constructor() {
    this.Stack = [];
  }
  push(val) {
    this.Stack.push(val);
  }
  pop() {
    if (this.Stack.length == 0) {
      throw "stack underflow";
    } else {
      return this.Stack.pop();
    }
  }
  peek() {
    if (this.Stack.length == 0) {
      throw "stack underflow";
    } else {
      return this.Stack[this.Stack.length - 1];
    }
  }
  isEmpty() {
    return this.Stack.length == 0;
  }
  size() {
    return this.Stack.length;
  }
  print() {
    return this.Stack;
  }
}

var isValid = function (s) {
  var bracketStack = new Stack();
  let testString = s;
  var valid = true;
  var i = 0;
  while (testString > i && valid) {
    var charVal = testString.charAt(i);
    if (charVal == "(" || charVal == "{" || charVal == "[") {
      bracketStack.push(charVal);
    } else if (charVal == ")" || charVal == "}" || charVal == "]") {
      if (!bracketStack.isEmpty()) {
        bracketStack.pop();
      } else {
        valid = false;
      }
    }
    i++;
  }
  if (!bracketStack.isEmpty()) {
    valid = false;
  }
  return valid;
};

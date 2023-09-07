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

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.size());
console.log(myStack.print());
console.log(myStack.pop());
console.log(myStack.print());
console.log(myStack.peek());
console.log(myStack.isEmpty());
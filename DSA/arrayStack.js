class stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    return this.stack.push(val);
  }
  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      throw "stack underFlow";
    }
  }
  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      throw "stack underFlow";
    }
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  size() {
    return this.stack.length;
  }
  print() {
    console.log(this.stack);
  }
}
// let s = new stack();
// s.push(1);
// s.push(4);
// s.push(80);
// s.push(720);
// s.push(7);
// s.print();
// console.log(s.isEmpty());
// console.log(s.peek());
// console.log(s.pop());

// console.log(s.size());
var s = new stack();
s.push(1);
s.push(2);
s.print();

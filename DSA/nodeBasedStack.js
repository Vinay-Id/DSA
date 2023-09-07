// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = new Node(null, null);//do prperty hai iske pass first value and second next
//     this.size = 0;
//   }
//   push(val) {
//     var inNode = new Node(val, this.top);
//     this.top = inNode;
//     this.size++;
//   }
//   pop() {
//     if (this.size > 0) {
//       var retVal = this.top.value;
//       this.top = this.top.next;
//       this.size--;
//       return retVal;
//     } else {
//       throw "stack underflow";
//     }
//   }
//   peek() {
//     if (this.size > 0) {
//       return this.top.value;
//     } else {
//       throw "stack underflow";
//     }
//   }
//   isEmpty() {
//     return this.size == 0;
//   }

//   sizeLen() {
//     return this.size;
//   }

//   print() {
//     var holder = this.top;
//     while (holder.next !== null) {
//       console.log(holder.value);
//     //   console.log(this.top);
//       holder = holder.next;
//     }
//   }
// }
// let myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// console.log(myStack.sizeLen());
// myStack.print();
// console.log(myStack.pop());
// console.log(myStack.pop());
// myStack.print();
// console.log(myStack.peek());
// console.log(myStack.isEmpty());

class Node {
  constructor(value, next) {
    this.val = value;
    this.nex = next;
  }
}
class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }
  push(num) {
    var inNode = new Node(num, this.top);
    this.top = inNode;
    this.size++;
  }
  pop() {
    if (this.size > 0) {
      var retVal = this.top.val;
      this.top = this.top.nex;
      this.size--;
      return retVal;
    } else {
      throw "stack underflow";
    }
  }
  peek() {
    if (this.size > 0) {
      return this.top.val;
    } else {
      throw "stack underflow";
    }
  }
  len() {
    return this.size;
  }
  isEmpty() {
    return this.size == 0;
  }
  print() {
    var holder = this.top;
    while (holder.nex != null) {
      console.log('value: ',holder.val);
      holder = holder.nex;
    }
  }
}
let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.len());
myStack.print();
console.log(myStack.pop());
console.log(myStack.pop());
myStack.print();
console.log(myStack.peek());
console.log(myStack.isEmpty());
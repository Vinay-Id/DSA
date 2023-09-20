class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear] = val;
    this.rear++;
  }

  dequeue() {
    var val = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return val;
  }

  peek() {
    return this.queue[this.head];
  }

  length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  print() {
    console.log(this.queue);
    // console.log('head ',this.queue[this.head]);
    // console.log('rear ',this.queue[this.rear]);
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();

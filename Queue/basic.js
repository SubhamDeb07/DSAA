class Queue {
  constructor() {
    this.q = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(ele) {
    if (this.front === -1) {
      this.front += 1;
      this.rear += 1;
    } else {
      this.rear += 1;
    }
    this.q[this.rear] = ele;
  }

  dequeue() {
    if (this.rear === this.front) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front += 1;
    }
  }
  isEmpty() {
    if (this.rear === -1) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  firstEle() {
    if (this.q.length > 0) {
      console.log(this.q[this.front]);
    }
  }
}
let obj = new Queue();
obj.enqueue(1);
obj.enqueue(2);
obj.firstEle();
obj.dequeue();
obj.firstEle();
obj.isEmpty();
obj.dequeue();
obj.isEmpty();
obj.firstEle();
console.log(obj.q, obj.front, obj.rear);

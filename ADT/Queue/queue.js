//shift, pop method 사용
const arr = [1, 2, 3];
const enqueue = (arr, _data) => {
  arr.push(_data);
};
const dequeue = (arr) => {
  arr.shift();
};
// enqueue(arr, 3);
// console.log(arr);
// dequeue(arr);
// console.log(arr);
// dequeue(arr);
// console.log(arr);
// enqueue(arr, 7);
// console.log(arr);

//shift, pop method 사용x
const arr2 = [4, 5, 6];
const enqueue2 = (arr, _data) => {
  arr[arr.length] = _data;
};
const dequeue2 = (arr) => {
  arr.splice(0, 1);
};
// enqueue2(arr2, 4);
// console.log(arr2);
// dequeue2(arr2);
// console.log(arr2);

//순수한 queue 알고리즘 구현
class Node {
  constructor(_data) {
    this.data = _data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // 노드의 처음
    this.rear = null; //노드의 끝
    this.length = 0; //노드의 길이
  }

  enqueue(_data) {
    const node = new Node(_data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
  front() {
    return this.head && this.head.data;
  }
  back() {
    return this.rear && this.rear.data;
  }
  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const array = [];
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}
const queue = new Queue();
queue.enqueue(1);
console.log(queue.getQueue());

queue.enqueue(2);
console.log(queue.getQueue());

queue.enqueue(3);
console.log(queue.getQueue());

queue.enqueue(4);
console.log(queue.getQueue());

queue.dequeue();
console.log(queue.getQueue());

console.log(queue.dequeue());
console.log(queue.getQueue());

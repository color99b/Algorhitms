//method 사용한 간단 구현
const arr = [1, 2, 3, 4];

const push = (_arr, _data) => {
  _arr.push(_data);
};
const pop = (_arr) => {
  _arr.pop();
};

// push(arr, 3);
// console.log(arr);
// push(arr, 7);
// console.log(arr);
// pop(arr);
// console.log(arr);

// 순수 stack 구현
class Node {
  constructor(_data) {
    this.data = _data;
    this.next = null;
    this.before = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  push(_data) {
    const node = new Node(_data);

    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
      node.before = this.rear;
    }
    this.rear = node;
    this.length++;
  }

  pop() {
    if (!this.head) {
      return false;
    }
    const data = this.rear.data;
    this.rear = this.rear.before;
    this.rear.next = null;
    this.length--;

    return data;
  }
  // data를 추출한다 -> 마지막 노드를 앞전 노드로 바꿔준다 -> 앞전 노드의 next 연결을 끊어준다.
  front() {
    return this.head && this.head.data;
  }
  back() {
    return this.rear && this.rear.data;
  }
  getStack() {
    if (!this.head) return false;
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}
let stack = new Stack();

// stack.push(3);
// console.log(stack.pop()); push pop 후 다시 push 하면 에러남

// console.log(stack.getStack());
// stack.push(4);
// console.log(stack.getStack());
// stack.push(5);
// console.log(stack.getStack());
// stack.pop();
// console.log(stack.getStack());
// console.log(stack.pop());
// console.log(stack.getStack());

// next를 제외한 다른 사람의 stack 구현
class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (!this.size) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }
    this.size += 1;
  }

  pop() {
    if (!this.size) return null;

    const data = this.top.item;
    this.top = this.top.prev;
    this.size--;

    return data;
  }
}

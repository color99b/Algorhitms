import Heap from "../Heap/heap";

class PriorityQueue extends Heap {
  constructor() {
    super();
  }
  enqueue = (_data: number) => this.push(_data);
  dequeue = () => this.poll();
  isEmpty = () => this.data.length <= 0;
}

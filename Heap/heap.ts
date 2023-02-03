class Heap {
  data: number[];
  constructor() {
    this.data = [];
  }

  getParentIndex(_i: number): number {
    return Math.floor((_i - 1) / 2);
  }
  getLeftChildIndex(_i: number): number {
    return _i * 2 + 1;
  }
  getRightChildIndex(_i: number): number {
    return Math.floor((_i - 1) / 2);
  }

  swap(_i1: number, _i2: number): void {
    const temp = this.data[_i1];
    this.data[_i1] = this.data[_i2];
    this.data[_i2] = temp;
  }

  push(_data: number): void {
    // this.data.push(_data);
    this.data[this.data.length] = _data;
    //새로운 index부여 + 데이터 할당
    this.heapifyUp();
    //숫자가 heap에 맞게 정렬되도록하는 정렬 알고리즘이 필요하다.
  }

  heapifyUp(): void {
    let currIdx = this.data.length - 1;

    while (this.data[currIdx] > this.data[this.getParentIndex(currIdx)]) {
      this.swap(currIdx, this.getParentIndex(currIdx));
      currIdx = this.getParentIndex(currIdx);
    }
  }

  heapifyDown(): void {
    let currIdx = 0;
    while (this.data[this.getLeftChildIndex(currIdx)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currIdx);

      if (
        this.data[this.getRightChildIndex(currIdx)] !== undefined &&
        this.data[this.getLeftChildIndex(currIdx)] <
          this.data[this.getRightChildIndex(currIdx)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currIdx);
      }

      if (this.data[biggestChildIndex] > this.data[currIdx]) {
        this.swap(currIdx, biggestChildIndex);
        currIdx = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  poll(): number {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();

    return maxValue;
  }
}

const heapTest = new Heap();
heapTest.push(6);
heapTest.push(8);
heapTest.push(7);
heapTest.push(4);
console.log(heapTest.data);
console.log(heapTest.poll());
console.log(heapTest.data);

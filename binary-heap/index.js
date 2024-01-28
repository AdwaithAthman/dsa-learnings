class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && parentIndex > this.heap[index]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.heapifyDown(0);
  }

  heapifyDown(index) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let minIndex = index;
    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[minIndex]
    ) {
      minIndex = leftChild;
    }
    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[minIndex]
    ) {
      minIndex = rightChild;
    }
    if (minIndex !== index) {
      [this.heap[index], this.heap[minIndex]] = [
        this.heap[minIndex],
        this.heap[index],
      ];
      this.heapifyDown(minIndex);
    }
  }
}

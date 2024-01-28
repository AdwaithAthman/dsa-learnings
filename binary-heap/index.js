class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index){
        let parentIndex = Math.floor(( index - 1) / 2 )
        while(index > 0 && parentIndex > this.heap[index]){
            [ this.heap[index], this.heap[parentIndex] ] = [ this.heap[parentIndex], this.heap[index] ]
            index = parentIndex
            parentIndex = Math.floor(( index - 1) / 2 )
        }
    }
}
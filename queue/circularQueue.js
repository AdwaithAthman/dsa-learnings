class CircularQueue {
    constructor(capacity){
        this.items = new Array (capacity)
        this.capacity = capacity
        this.length = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.length === 0
    }

    isFull(){
        return this.capacity === this.length
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = value
            this.length++
            if(this.front === -1){
                this.front === this.rear
            }
        }
    }

    dequeue(){
        const value = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.length--
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return value
    }
}
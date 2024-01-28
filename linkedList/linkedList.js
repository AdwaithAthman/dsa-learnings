class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return "invalid operation"
        }
        if(index === 0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node;
        }
        this.size++
    }

    removeFrom(index){
        if(this.isEmpty() || index >= this.size){
            return "invalid operation"
        }
        else if(index === 0){
            const nodeToRemove = this.head
            this.head = this.head.next
            this.size--
            return nodeToRemove
        }
        else{
            const prev = this.head
            for(let i = 0; i<index-1; i++){
                prev = prev.next
            }
            const nodeToRemove = prev.next
            prev.next = nodeToRemove.next
            this.size--
            return nodeToRemove
        }
    }

    reverse(){
        let prev = null
        let cur = this.head
        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }

    print(){
        let curr = this.head;
        let list = ""
        while(curr){
            list += `${curr.value} `
            curr = curr.next;
        }
        console.log(list)
    }

    sort() {
        this.head = this.mergeSort(this.head);
    }

    // Implement the merge sort
    mergeSort(node) {
        if (!node || !node.next) {
            return node;
        }

        const middle = this.getMiddle(node);
        const nextToMiddle = middle.next;

        middle.next = null;

        const left = this.mergeSort(node);
        const right = this.mergeSort(nextToMiddle);

        return this.sortedMerge(left, right);
    }

    // Implement the merge function
    sortedMerge(a, b) {
        let result = null;

        if (!a) {
            return b;
        } else if (!b) {
            return a;
        }

        if (a.value <= b.value) {
            result = a;
            result.next = this.sortedMerge(a.next, b);
        } else {
            result = b;
            result.next = this.sortedMerge(a, b.next);
        }

        return result;
    }

    // Implement the getMiddle function
    getMiddle(node) {
        if (!node) {
            return node;
        }

        let slow = node;
        let fast = node;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

}

const list = new LinkedList()

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.append(50);
list.insert(25,2)
list.print();
list.reverse()
list.print()
console.log(list.getMiddle(list.head))
list.sort()
list.print()    

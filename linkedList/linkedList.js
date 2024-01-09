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

    print(){
        let curr = this.head;
        let list = ""
        while(curr){
            list += `${curr.value} `
            curr = curr.next;
        }
        console.log(list)
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

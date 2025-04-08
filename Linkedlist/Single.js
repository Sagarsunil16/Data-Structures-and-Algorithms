class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class singleLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const newNode = new Node(value)
        console.log("entered")
        if(this.isEmpty()){
            console.log("empty")
            this.head = newNode
        }
        let prev = this.head
        while(prev.next){
            prev = prev.next
        }
        prev.next = newNode
        this.size++
    }

    print(){
        if(this.isEmpty()){
           console.log("List is emptt, insert some values")
        }
        let curr = this.head
        let listValue = ""
        while(curr){
            listValue+= ` ${curr.value}->`
            curr = curr.next
        }
        console.log(listValue)
    }
}


const single = new singleLinkedList()

console.log(single.getSize())
console.log(single.isEmpty())
single.prepend(10)
single.prepend(20)
single.prepend(30)

single.print()

single.append(20)
single.append(30)

single.print()
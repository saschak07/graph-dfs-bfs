const linkedListNode = require('./linkedListNode')

class LinkedList{
    constructor(){
        this.head = null
    }
    prepend(data){
        if(this.head==null){
            this.head = new linkedListNode(data)
            return
        }
        const newNode = new linkedListNode(data)
        newNode.next = this.head
        this.head = newNode
    
    }
    get(data){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.data===data){
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
    getAllNodes(){
        let result = []
        let currentNode = this.head
        while(currentNode){
            result.push(currentNode.data)
            currentNode = currentNode.next
        }
        return result
    }

    append(data){
        if(this.head==null){
            this.head = new linkedListNode(data)
            return
        }
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = new linkedListNode(data)
    }

    findMiddle(){
        let slowNode = this.head
        let fastNode = this.head

        while(fastNode.next){
            slowNode = slowNode.next
            fastNode = fastNode.next.next
        }

        return slowNode
    }

    reverse(){
        if(!this.head){
            console.log('cannot reverse an empty list')
            return
        }
        var currentNode = this.head
        var previous = null
        var next = null
        while(currentNode){
            var next = currentNode.next
            currentNode.next = previous
            previous = currentNode
            currentNode = next
        }
        this.head = previous;
    }

    remove(data){
        let previous = this.head
        let currentNode = this.head
        let foundNode = false
        while(currentNode){
            var next = currentNode.next
            if(currentNode.data === data){
                if(currentNode === this.head){
                    this.head = currentNode.next
                }
                previous.next = next
                foundNode = true
                return
            }
            previous = currentNode
            currentNode = next
        }
        if(!foundNode){
            console.log('node not found!')
        }
    }

    toArray(){
        const nodes = []
        let currentNode = this.head
        while(currentNode){
            nodes.push(currentNode.data)
            currentNode = currentNode.next
        }
        return nodes
    }
    toString(callback){
        return this.toArray().map(node => node.toString(callback)).toString()
    }


}

module.exports = LinkedList
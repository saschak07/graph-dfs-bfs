class linkedListNode{
    constructor(data){
        this.data = data
        this.next = null
    }

    toString(callback){
        return callback? callback(this.value) :`${this.data}`
    }
}
module.exports = linkedListNode
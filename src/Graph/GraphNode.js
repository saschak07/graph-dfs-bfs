const LinkedList = require('../LinkedList/linkedList')
class GraphNode{
    constructor(id){
        this.id = id
        this.adjacentList = new LinkedList()
    }
}
module.exports = GraphNode
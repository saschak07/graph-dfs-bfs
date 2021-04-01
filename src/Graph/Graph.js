const GraphNode = require('../Graph/GraphNode')
class Graph {
    constructor(){
        this.nodeElements = []
    }
    addNode(id){
        if(this.nodeElements.some(node=>node.id===id)){
            throw Error('node already exists!')
        }
        this.nodeElements.push(new GraphNode(id))
    }
    getNode(id){
        return this.nodeElements.find(node=>node.id===id)
    }
    addEdges(sourceId,destinationId){
        const sourceNode = this.getNode(sourceId)
        const destinationNode = this.getNode(destinationId)
        if(!sourceNode || !destinationNode){
            throw Error('source or destination not found')
        }
        sourceNode.adjacentList.append(destinationId)
    }
    hasPathDFS(sourceId,destinationId){
        const source = this.getNode(sourceId)
        const destination = this.getNode(destinationId)
        if(!source || !destination){
            throw Error('source or destination not found')
        }
        let visited = new Set();
        return this.handleHaspathDFS(source,destination,visited)
    }
    handleHaspathDFS(source,destination,visited){
        let result = false
        const childNode = source.adjacentList.get(destination.id)
        if(childNode){
            return true
        }
        visited.add(source.id)
        source.adjacentList.getAllNodes().forEach(element => {
            if(visited.has(element)){
                return
            }
            let newSource = this.getNode(element)
            result = this.handleHaspathDFS(newSource,destination,visited)
        });
        return result
    }
    hasPathBFS(sourceId,destinationId){
        const source = this.getNode(sourceId)
        const destination = this.getNode(destinationId)
        if(!source || !destination){
            throw Error('source or destination not found')
        }
        let nodesToVisit = new Set();
        return this.handleHaspathBFS(source,destination,nodesToVisit)
    }
    handleHaspathBFS(source,destination,nodesToVisit){
        let result = false
        nodesToVisit.add(source.id)
        source.adjacentList.getAllNodes().forEach(node=>nodesToVisit.add(node))
        nodesToVisit.forEach(node => {
            let currentNode = this.getNode(node)
            if(currentNode.adjacentList.get(destination.id)){
                result = true
                return 
            }
            nodesToVisit.delete(currentNode.id)
            currentNode.adjacentList.getAllNodes().forEach(node=>nodesToVisit.add(node))
        })
        return result
    }
    
}
module.exports = Graph
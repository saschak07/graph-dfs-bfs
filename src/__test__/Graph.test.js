const { test, expect } = require('@jest/globals')
const Graph = require('../Graph/Graph')

test('insert node to graph',()=>{
    const testGraph = new Graph()
    const testData = [1,2,3,4,5]
    testData.forEach(data=>testGraph.addNode(data))
    testGraph.addEdges(1,2)
    testGraph.addEdges(1,3)
    testGraph.addEdges(3,4)
    testGraph.addEdges(3,5)
    expect(testGraph.getNode(1).adjacentList.toString()).toBe('2,3')
    expect(testGraph.getNode(3).adjacentList.toString()).toBe('4,5')
})
test('test depth first search', () => {
    const testGraph = new Graph()
    const testData = [1,2,3,4,5]
    testData.forEach(data=>testGraph.addNode(data))
    testGraph.addEdges(1,2)
    testGraph.addEdges(1,3)
    testGraph.addEdges(3,4)
    testGraph.addEdges(3,5)
    expect(testGraph.hasPathDFS(1,5)).toBe(true)
    expect(()=>testGraph.hasPathDFS(1,6)).toThrow('source or destination not found')
})
test('test Breadth first search',() => {
    const testGraph = new Graph()
    const testData = [1,2,3,4,5]
    testData.forEach(data=>testGraph.addNode(data))
    testGraph.addEdges(1,2)
    testGraph.addEdges(1,3)
    testGraph.addEdges(3,4)
    testGraph.addEdges(3,5)
    expect(testGraph.hasPathBFS(1,5)).toBe(true)
    expect(()=>testGraph.hasPathDFS(1,6)).toThrow('source or destination not found')
})
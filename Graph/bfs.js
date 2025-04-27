class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    printGraph() {
        for (let [key, value] of Object.entries(this.adjacencyList)) {
            console.log(key, value, "check");
        }
    }
}


const g = new Graph();
g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('b', 'd');
g.addEdge('c', 'e');
g.addEdge('d', 'e');
g.addEdge('d', 'f');
g.printGraph();
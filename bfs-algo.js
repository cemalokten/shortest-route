class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
    this.relations = new Map()
  }

  addNode(node) {
    const nodes = this.nodes;
    nodes.set(node)
  }

  addEdge(node1, node2, weight) {
    const relations = this.relations;
    const nodes = this.nodes;

    if (!nodes.has(node1)) nodes.set(node1, node1)
    if (!nodes.has(node2)) nodes.set(node2, node2)

    if (!relations.has(node1)) relations.set(node1, [])
    if (!relations.has(node2)) relations.set(node2, [])

    relations.get(node1).push(node2)
    relations.get(node2).push(node1)
    
    const edge = {
      from: node1,
      to: node2,
      weight: weight || 1,
    }

    this.edges.push(edge)
  }

  shortestPath(graph, start) {
    let distances = []
    for (let i = 0; i < graph.nodes.size; i++) distances[i] = Infinity;
    distances[start] = 0

    let visited = Array(graph.nodes.size).fill(false)

    while(true) {
      let shortestDistance = Infinity;
      const shortestUnvisitedNode = null

    }
  }
}

const graph = new Graph();

// Northern Line
graph.addEdge('1', '2', 2);
graph.addEdge('2', '3', 3);
graph.addEdge('3', '4', 2);
graph.addEdge('4', '5', 1);

graph.addEdge('a', 'b', 1);
graph.addEdge('b', '3', 2);
graph.addEdge('3', 'c', 4);
graph.addEdge('c', 'd', 4);


console.log(graph)

graph.shortestPath(graph, 1)


class GraphNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, weight) {
    var graphNode = new GraphNode(element, weight);
    var contain = false;
    var i = 0;

    while (i < this.items.length && !contain) {
      if (this.items[i].weight > graphNode.weight) {
        this.items.splice(i, 0, graphNode);
        contain = true;
      }
      i++;
    }

    if (!contain) {
      this.items.push(graphNode);
    }
  }
  dequeue() {
    if (this.items.length == 0) {
      throw "StackUnderflow";
    } else {
      return this.items.shift();
    }
  }
  print() {
    console.log(this.items);
  }
}
function dijkstra(g, source) {
  let distances = {};
  let prev = {};
  let pq = new PriorityQueue();

  distances[source] = 0;
  pq.enqueue(source, 0);

  var allNodes = g.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i] != source) {
      distances[allNodes[i]] = Infinity;
    }
    prev[allNodes[i]] = null;
  }

  while (!pq.isEmpty()) {
    let minNode = pq.dequeue();
    let currNode = minNode.name;

    let adjList = g.getEdges(minNode.name);

    for (const [key, value] of adjList.entries()) {
      let alt = distances[currNode] + key.weight;

      if (alt < distances[key.adj]) {
        distances[key.adj] = alt;
        prev[key.adj] = currNode;

        pq.enqueue(key.adj, distances[key.adj]);
      }
    }
  }
  console.log(distances);
}

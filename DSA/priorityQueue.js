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

var pq = new PriorityQueue();
pq.enqueue(1, 10);
pq.enqueue(2, 5);
pq.enqueue(3, 0);
pq.enqueue(4, 20);
pq.print();


// example In this exercise, you will complete a depth first search on a graph


class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node,adj,weight){
        if (this.adjList.has(node)){
            var currSet = this.adjList.get(node);
            currSet.add({adj,weight});
            this.adjList.set(node,currSet);
        }else{
            this.adjList.set(node,new Set([{adj,weight}]));
        }
    }

    addEdge(node,adj,weight){
        this.addEdgeHelper(node,adj,weight);
    }


    getEdges(node){
        return this.adjList.get(node);
    }

    print(){
        console.log(this.adjList);
    }
}
function dfs(start,target,g){
    console.log("Visiting Node " + start);
    if (start === target){
        console.log("Found the target");
        return start;
    }
    var adj=Array.from(g.getEdges(start));
    for(var i=0;i<adj.length;i++){
        var result=dfs(adj[i].adj,target,g);
        if(result !=null){
            return result;
        }
    }
    console.log("Went through all children of " + start + ", returning to it's parent");
    return null;
}
var g=new Graph();
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,4);
console.log(dfs(1,4,g));
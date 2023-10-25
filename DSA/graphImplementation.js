class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
      this.adjList.set(node, currSet);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
    if (adj != node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  print() {
    console.log(this.adjList);
  }
}


//example
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
    //     if (adj != node){
    //         this.addEdgeHelper(adj,node,weight);
    //     }  
    }


    getEdges(node){
        return this.adjList.get(node);
    }

    print(){
        console.log(this.adjList);
    }
}
var g = new Graph();
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,4);
console.log(g.getEdges(1));
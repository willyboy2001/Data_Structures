class weightedGraph {
  constructor() {
    this.AdjacencyList = {};
  }
  addVertex(v) {
    if (!this.AdjacencyList[v]) this.AdjacencyList[v] = [];
  }

  addEdge(v1, v2, weight) {
    this.AdjacencyList[v1].push({ node: v2, weight });
    this.AdjacencyList[v2].push({ node: v1, weight });
  }

  shortestDistance(start, end) {
    const distance = {};
    const list = this.AdjacencyList;
    const heap = new Heap();
    for (const key in this.AdjacencyList) {
      distance[key] = Number.MAX_SAFE_INTEGER;
      console.log(key);
    }
    distance[start] = 0;
    // heap.insert(start, distance[start]);
    // TO find the shortes path between vertexes x and y, once  y becomes the smallest val in the heap, then the current val of distance[y] is the shortest path;
    function work(vertex, visited = {}) {
      if (!vertex) return;
      let adjacent;
      for (let i = 0; i < list[vertex].length; i++) {
        adjacent = list[vertex][i];
        distance[adjacent['node']] = Math.min(
          distance[adjacent['node']],
          distance[vertex] + adjacent['weight']
        );
        if (!visited[adjacent['node']]) {
          heap.insert(adjacent['node'], distance[adjacent['node']]);
        }
      }
      visited[vertex] = true;

      work(heap.deleteMin(), visited);
    }
    work(start);
    console.log(distance);
    return distance[end];
  }
}

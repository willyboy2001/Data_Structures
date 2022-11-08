class Graph {
  constructor() {
    this.adjencencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjencencyList[vertex]) this.adjencencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjencencyList[v1].push(v2);
    this.adjencencyList[v2].push(v1); // For undirected graph
  }

  removeEdge(v1, v2) {
    let indx = this.adjencencyList[v1].findIndex(ele => ele === v2);
    if (indx === this.adjencencyList[v1].length - 1) {
      this.adjencencyList[v1].pop();
    } else {
      this.adjencencyList[v1][indx] = this.adjencencyList[v1].pop();
    }
    indx = this.adjencencyList[v2].findIndex(ele => ele === v1);
    if (indx === this.adjencencyList[v2].length - 1) {
      this.adjencencyList[v2].pop();
    } else {
      this.adjencencyList[v2][indx] = this.adjencencyList[v2].pop();
    }
  }

  removeVertex(v) {
    let counter = 0;
    for (let i = 0; i < this.adjencencyList[v].length; ) {
      // Notice i is not incremented, cos the length of the list is increasing after each iteration.

      // indx = this.adjencencyList[this.adjencencyList[v][i]].findIndex(
      //   ele => ele === v
      // );
      // if (indx === this.adjencencyList[this.adjencencyList[v][i]].length - 1) {
      //   this.adjencencyList[this.adjencencyList[v][i]].pop();
      // } else {
      //   this.adjencencyList[this.adjencencyList[v][i]][indx] =
      //     this.adjencencyList[this.adjencencyList[v][i]].pop();
      // }
      this.removeEdge(v, this.adjencencyList[v][i]);
    }
    delete this.adjencencyList[v];
  }

  depthFirstTraversal(startingVertex) {
    const visited = {};
    let counter = 0;

    const work = startingVertex => {
      // we visit the children before we go to siblings{}
      console.log(startingVertex);
      visited[startingVertex] = true;

      for (const ele of this.adjencencyList[startingVertex]) {
        counter++;
        if (!visited[ele]) {
          work(ele);
        }
      }
    };
    // THe time complexity is O(V+2E)

    work(startingVertex);
    console.log(counter);
  }
  
  
  connectedComponents() {
    const filled = {};
    const breadthFirstSearch = startingVertex => {
      const arr = [];
      let tempList;
      let removedEle;
      arr.push(startingVertex);
      filled[startingVertex] = true;
      while (arr.length !== 0) {
        removedEle = arr.shift();
        tempList = this.adjencencyList[removedEle];
        for (let i = 0; i < tempList.length; i++) {
          if (!filled[tempList[i]]) {
            arr.push(tempList[i]);
            filled[tempList[i]] = true;
          }
        }
        console.log(removedEle);
      }
    };

    for (let i = 0; i < this.vertices.length; i++) {
      if (!filled[this.vertices[i]]) {
        breadthFirstSearch(this.vertices[i]);
        console.log('\n');
      }
    }
  }
  
  
   topologicalOrdering(vertex, filled = {}) {
    if (filled[vertex]) return;
    calls++;
    // inStack[vertex] = true;
    for (let i = 0; i < this.reverseAdjacencyList[vertex].length; i++) {
      if (!filled[this.reverseAdjacencyList[vertex][i]]) {
        this.topologicalOrdering(this.reverseAdjacencyList[vertex][i], filled);
      }
    }
    if (!filled[vertex]) {
      console.log(vertex);
      filled[vertex] = true;
    }

    for (let i = 0; i < this.adjencencyList[vertex].length; i++) {
      if (!filled[this.adjencencyList[vertex][i]]) {
        this.topologicalOrdering(this.adjencencyList[vertex][i], filled);
      }
    }
  }

  breadthFirstTraversal(startingVertex) {
    let curr;
    const queue = [startingVertex];
    const leftBiPartite = [];
    const rightBiPartite = [];
    // const visited = { startingVertex: true };// this is a logic error. It will creat a key called startingVertex(it wont copy the val of starting vertex)
    const visited = {};
    visited[startingVertex] = [true, true];

    while (queue.length) {
      curr = queue.shift();
      console.log(curr);
      for (const ele of this.adjencencyList[curr]) {
        if (!visited[ele]) {
          // console.log(ele);
          queue.push(ele);
          visited[ele] = [true, !visited[curr][1]];
          // console.log(ele);
        } else if (visited[curr][1] === visited[ele][1]) {
          console.log(ele, curr);
          return false;
        }
      }
    }

    for (const [key, ele] of Object.entries(visited)) {
      if (ele[1]) {
        leftBiPartite.push(key);
      } else {
        rightBiPartite.push(key);
      }
    }
    console.log(leftBiPartite);
    console.log(rightBiPartite);
    return true;
  }

  aSpanningTreeBFS(startingVertex) {
    let curr;
    const queue = [startingVertex];
    let level = 0;
    // const visited = { startingVertex: true };
    const visited = {};
    visited[startingVertex] = [true, 0];

    while (queue.length) {
      curr = queue.shift();
      // console.log(curr);
      this.adjencencyList[curr].slice().forEach(ele => {
        if (!visited[ele]) {
          console.log(ele);
          queue.push(ele);
          visited[ele] = [true, visited[curr][1] + 1];
          // console.log(ele);
        } else if (visited[curr][1] - visited[ele][1] <= 0) {
          console.log(ele, curr);
          this.removeEdge(curr, ele);
        }
      });
    }

    return visited;
  }
  connectedComponentsUsingDFS() {
    const stack = [];
    // const ParentStack = [];
    let curr;
    const ans = [];
    let any;
    let counter = 0;
    // let toPut;
    const visited = {};
    for (const ele of Object.keys(this.adjencencyList)) {
      if (!visited[ele]) {
        visited[ele] = [true, 0, 0];
        stack.push(ele);
        ans[counter] = [ele];
        while (stack.length) {
          any = false;
          curr = stack[stack.length - 1];
          for (
            let i = visited[curr][1];
            i < this.adjencencyList[curr].length;
            i++
          ) {
            visited[curr][1]++;
            if (!visited[this.adjencencyList[curr][i]]) {
              any = true;
              visited[this.adjencencyList[curr][i]] = [
                true,
                0,
                visited[curr][2] + 1,
              ];
              stack.push(this.adjencencyList[curr][i]);
              visited[curr][i] = i + 1;
              ans[counter].push(stack[stack.length - 1]);
              break;
            } else if (
              stack[stack.length - 2] !== this.adjencencyList[curr][i]
            ) {
              console.log(curr, this.adjencencyList[curr][i]);
              this.removeEdge(curr, this.adjencencyList[curr][i]);
              i--;
            }
          }

          if (!any) {
            stack.pop();
            visited[curr][1] = this.adjencencyList[curr].length;
          }
          //FINALLY SOLVED!!! ON 5th October 2021 by 3:37pm

          // any = false;
          // curr = stack[stack.length - 1];
          // // console.log(curr);

          // // console.log(visited[curr][2], this.adjencencyList[curr].length);
          // for (
          //   let i = visited[curr][2];
          //   i < this.adjencencyList[curr].length;
          //   i++
          // ) {
          //   visited[curr][2] = i + 1;
          //   console.log(visited[curr][2]);
          //   if (!visited[this.adjencencyList[curr][i]]) {
          //     toPut = this.adjencencyList[curr][i];
          //     any = true;
          //     stack.push(toPut);
          //     ParentStack.push(curr);
          //     visited[toPut] = [true, visited[curr][1] + 1, 0];
          //     break;
          //   } else if (toPut !== ParentStack[ParentStack.length - 1]) {
          //     this.removeEdge(curr, toPut);
          //     i--;
          //   }
          // }
          // if (!any) stack.pop();

          console.log(stack);
          // console.log(ParentStack);
        }
        counter++;
      }
    }

    return ans;
  }
}

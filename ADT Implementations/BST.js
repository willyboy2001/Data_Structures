class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}




class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static printTree(root) {
    if (!root) return;
    BinarySearchTree.printTree(root.left);
    console.log(root.value);
    BinarySearchTree.printTree(root.right);
  }

  find(val) {
    var currentNode = this.root;

    while (currentNode) {
      if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else return currentNode;
    }
    return false;
  }

  insert(value, root = this.root) {
    var prev = root;
    while (root) {
      prev = root;
      if (value < root.value) root = root.left;
      else root = root.right;
    }

    if (value < prev.value) prev.left = new Node(value);
    else prev.right = new Node(value);

    return this;
  } // the treee will only be able to access its root(which is an object of the Node class)
  static postOrderTraversal(root) {
    const firstStack = new Stack();
    const secondStack = new Stack();
    const postOrderArr = [];
    let currentNode = root;
    firstStack.push(currentNode);
    // console.log(!firstStack.isEmpty());
    // console.log(currentNode.value);
    // console.log(currentNode.right);
    // console.log(firstStack.peek().value, secondStack.peek()?.value);
    // postOrderArr.push(firstStack.pop().value);
    // console.log(postOrderArr);

    while (!firstStack.isEmpty()) {
      if (firstStack.peek().value === secondStack.peek()?.value) {
        postOrderArr.push(firstStack.pop().value);
        secondStack.pop();
        currentNode = firstStack.peek();

        continue;
      }
      if (currentNode.right) {
        firstStack.push(currentNode.right);
      }
      if (currentNode.left) {
        firstStack.push(currentNode.left);
      }

      secondStack.push(currentNode);

      currentNode = firstStack.peek();
    }

    return postOrderArr;
  }

  static inOrderTraversal(root) {
    const firstStack = new Stack();
    const secondStack = new Stack();
    const inOrderArr = [];
    let currentNode = root;
    firstStack.push(currentNode);

    while (!firstStack.isEmpty()) {
      if (firstStack.peek().value === secondStack.peek()?.value) {
        inOrderArr.push(firstStack.pop().value);
        secondStack.pop();
        if (currentNode.right) {
          firstStack.push(currentNode.right);
        }
        currentNode = firstStack.peek();

        continue;
      }
      if (currentNode.left) {
        firstStack.push(currentNode.left);
      }
      secondStack.push(currentNode);
      currentNode = firstStack.peek();
    }

    return inOrderArr;
  }

  // Space Complexity - O(H)- where H is height of binary tree.
  // At every point, there are at most h elements in the first and second array respectively
  heightOfTree(root = this.root) {
    if (root === null) return -1;

    const x = this.heightOfTree(root.left);
    const y = this.heightOfTree(root.right);

    if (x > y) return x + 1;
    return y + 1;
  }

  numOfNodes(root = this.root) {
    if (root === null) return 0;
    const x = this.numOfNodes(root.left);
    const y = this.numOfNodes(root.right);
    return x + y + 1;
  }

  numberOfDegree2(root = this.root) {
    if (root === null) return 0;
    const x = this.numberOfDegree2(root.left);
    const y = this.numberOfDegree2(root.right);

    if (root.left && root.right) {
      return x + y + 1;
    }
    return x + y;
  }
  numOfLeafNodes() {
    return this.numberOfDegree2() + 1;
  }

  numberOfDegree1() {
    return this.numOfNodes() - 2 * this.numberOfDegree2() - 1;
  }

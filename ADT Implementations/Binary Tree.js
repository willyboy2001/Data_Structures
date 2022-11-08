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

  printBreadthFirst() {
    // if (!root?.left && !root?.right) return;
    // console.log(root.left?.value ?? '\n'); 
    // console.log(root.right?.value ?? '\n'); 
    // BinarySearchTree.printBreadthFirst(root.left);
    // BinarySearchTree.printBreadthFirst(root.right);
    // Wrong Implementation

    const arr = [];
    var ele = this.root;
    var start = 0;
    arr.push(ele);

    while (start < arr.length) {
      ele = arr[start];
      if (ele.left) arr.push(ele.left);
      if (ele.right) arr.push(ele.right);
      start++; // Nice stuff. This var here helps us not to implemetnt shift, which is really costly.
      console.log(ele.value);
    }
    // return arr.map(ele => ele.value);
  }
  static DFSPreOrder(root) {
    if (!root) return;
    console.log(root.value);
    this.DFSPreOrder(root.left);
    this.DFSPreOrder(root.right);
  }

  insert(value, root) {
   // One of the draw down of recursion. Whhen we eventually fid where to insert it, we cant find an elegant approach to end all other recursive alls after it. Hence iteration is much better here.
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
}

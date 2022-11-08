class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} // needed cos all individual vals of a linke dlist are nodes.

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null; // the constructor takes no arg. But these are just the pre settings , since the link list is first empty
  }
  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = this.tail = node;
    } else {
      // dont forget to use else, cos if we dont the code here will run regadless of the if condition above
      this.tail.next = node;
      this.tail = node;
    }
    ++this.length; // time complexity O(1)
    return this;
  }

  pop() {
    if (this.length < 1) {
      console.log('INVALID OPERATION');
      return;
    } // remember the edge case where there is one item long
    let counter = this.head;
    while (counter.next.next) {
      // or you can use 2 variables to iterate through this, where one of them lags behind
      // used to iterate through the loop . Average case is O(N)
      counter = counter.next;
    }
    delete this.tail;
    counter.next = null;
    this.tail = counter;

    this.length--;
  }
  // unlike in an array, thus isnt O(1), cos we need to set the second to last item to become the new tail. Hence it is a bit tricky.

  insert(val, position) {
    if (position === 1) this.unshift(val);
    else if (position === this.length + 1) this.push(val);
    else if (position <= 0 || position > this.length + 1)
      console.log('Invalid Operation');
    else {
      this.length++;
      let counter = this.head;

      for (let i = 2; i <= position - 1; i++) {
        counter = counter.next;
      }
      const insertedNode = new Node(val);
      insertedNode.next = counter.next;
      counter.next = insertedNode;
    }
  }

  reverse() {
    // const arr = [];

    let prev = null;
    let current = this.head;
    let next = current.next;
    this.tail = current;

    while (next !== null) {
      current.next = prev;
      prev = current;
      current = next;
      next = next.next;
    }
    current.next = prev;
    this.head = current;
    return this;

    // while (current.next) {
    //   arr.push(current);
    //   current = current.next;
    // }
    // arr.push(current);
    // console.log(current);

    // arr[0].next = null;
    // for (let i = 1; i < this.length; i++) {
    //   arr[i].next = arr[i - 1];
    // }

    // this.head = current;
    // this.tail = arr[0];

    // return this;

    // while (newOne) {
    //   let newOne = curr.next;
    //   curr.next = current;
    // }
    // var prev = this.head;
    // var current = prev.next;
    // var tail = this.tail.value;
    // prev.next = null;
    // this.tail = prev;
    // while (current.next) {
    //   current.value = prev.value;
    //   current.next = prev;
    //   prev = current;
    //   current = current.next;
    // }
    // current.next = prev;
    // current.value = tail;
    // this.head = current;
    // console.log(current);
    // current.next = prev;
    // this.head = current;

    // var head = this.head;
    // var secondEle = head.next;
    // var thirdEle = secondEle.next;
    // head.next = null;
    // secondEle.next = head;
    // thirdEle.next = secondEle;
    // console.log(this.head);
    // this.head = thirdEle;
    // this.tail = head;
  }
}

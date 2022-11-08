class Heap {
  #max = -Infinity;
  #list;
  #length;
  #indexHash;
  #numOfOccurence;
  #indexHashlist;
  constructor(arr = []) {
    this.counter = arr.length;
    this.#indexHash = {};
    this.#numOfOccurence = {};
    this.#list = [];
    this.#length = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!this.#numOfOccurence[arr[i]]) {
        this.#numOfOccurence[arr[i]] = [];
      }
      this.#numOfOccurence[arr[i]][0] =
        (this.#numOfOccurence[arr[i]][0] || 0) + 1;
      this.#numOfOccurence[arr[i]].push(i);
      if (this.#numOfOccurence[arr[i]][0] === 1) {
        this.#list.push(arr[i]);
        this.#length++;
      }
    }
    console.log(this.#length);
    console.log(this.#numOfOccurence);
    this.#heapifys(this.#list);
  }
  maxElement() {
    return this.#max;
  }
  getList() {
    return this.#list;
  }
  getHash() {
    return this.#indexHash;
  }

  #setUp(startingPos = 0) {
    let tempIndex;
    let temp2;
    let startingIndex = startingPos;
    while (2 * startingIndex < this.#length - 1) {
      tempIndex =
        this.#list[2 * startingIndex + 1] >
        (this.#list[2 * startingIndex + 2] || -Infinity)
          ? 2 * startingIndex + 1
          : 2 * startingIndex + 2;
      if (this.#list[startingIndex] < this.#list[tempIndex]) {
        this.#indexHash[this.#list[startingIndex]] = tempIndex;
        this.#indexHash[this.#list[tempIndex]] = startingIndex;
        temp2 = this.#list[tempIndex];
        this.#list[tempIndex] = this.#list[startingIndex];
        this.#list[startingIndex] = temp2;
        startingIndex = tempIndex;
      } else break;
    }
  }

  #setDown(startingPos) {
    let curr = startingPos;
    let parent = Math.floor((curr - 1) / 2);
    let temp;
    while (parent > -1) {
      if (this.#list[curr] > this.#list[parent]) {
        this.#indexHash[this.#list[parent]] = curr;
        this.#indexHash[this.#list[curr]] = parent;
        temp = this.#list[parent];
        this.#list[parent] = this.#list[curr];
        this.#list[curr] = temp;
        curr = parent;
        parent = Math.floor((curr - 1) / 2);
      } else break;
    }
  }

  #heapifys(arr) {
    for (let i = 0; i < this.#length; i++) {
      this.#indexHash[this.#list[i]] = i;
    }
    const heapify = (starting = 0) => {
      if (2 * starting + 1 > arr.length - 1) {
        return;
      }

      heapify(2 * starting + 1);
      heapify(2 * starting + 2);
      this.#setUp(starting);
    };
    heapify();
    this.#max = this.#list[0];
    return this;
  }

  #insertAtEnd(key) {
    if (!(key in this.#indexHash)) {
      this.#list[this.#length++] = key;
      this.#indexHash[key] = this.#length - 1;
      this.#setDown(this.#length - 1);
    }
  }
  insert(key, pos = this.#length) {
    let removedEle;
    if (this.#numOfOccurence[key]) {
      this.#numOfOccurence[key][0]++;
    } else {
      this.#numOfOccurence[key][0] = 1;
    }
    this.#numOfOccurence[key].push(this.counter++);
    const work = (key1, pos1 = this.#length) => {
      if (pos1 === this.#length) {
        this.#insertAtEnd(key1);
      } else {
        removedEle = this.#list[pos1];
        delete this.getHash()[this.#list[pos1]];
        const leftChild = this.#list[2 * pos1 + 1] || -Infinity;
        const rightChild = this.#list[2 * pos1 + 2] || -Infinity;

        if (key1 in this.#indexHash) {
          let ele = this.#list.pop();
          console.log(ele);
          this.#list[pos1] = ele;
          this.#indexHash[ele] = pos1;
          this.#length--;

          console.log(this.getHash());

          // this.#list[pos1] = key1;
          // this.#indexHash[key1] = pos1;
        } else {
          this.#list[pos1] = key1;
          this.#indexHash[key1] = pos1;
        }

        if (this.#list[pos1] > Math.max(leftChild, rightChild)) {
          this.#setDown(pos1);
        } else {
          this.#setUp(pos1);
        }
      }
      this.#max = this.#list[0];
      return removedEle;
    };
    work(key, pos);

    console.log(removedEle);

    // this.#numOfOccurence[removedEle] =
    //   this.#numOfOccurence[removedEle] - 1 ?? 0;
    // if (this.#numOfOccurence[removedEle]) {
    //   console.log(this.#numOfOccurence[removedEle]);
    //   work(removedEle);
    // }
    // if (Number.isFinite(removedEle)) {
    //   this.#numOfOccurence[removedEle]--;
    //   if (this.#numOfOccurence[removedEle]) {
    //     work(removedEle);
    //   }
    // }
  }
  deleteMax() {
    if (this.#length === 0) throw new Error('Invalid Operation');
    if (this.#length === 1) {
      this.#list.pop();
      this.#max = null;
      this.#length--;
      return this;
    }
    this.#list[0] = this.#list.pop();
    this.#length--;

    this.setUp();

    this.#max = this.#list[0];
    return this;
  }
}

class Stack {
  #list;
  #top;
  #size;
  constructor(limit) {
    this.#top = -1;
    this.#size = limit > 0 ? limit : 50;
    this.#list = Array(this.#size);
  }

  isEmpty() {
    return this.#top === -1;
  }
  isFull() {
    return this.#top === this.#size - 1;
  }

  numOfElements() {
    return this.#top + 1;
  }

  push(x) {
    if (this.#top === this.#size - 1) {
      console.log('Stack OverFLow. Stack is Full');
      return null;
    }
    this.#list[++this.#top] = x;
    return this.#top + 1;
  }

  pop() {
    if (this.#top === -1) {
      console.log('Stack UnderFlow. Stack is Empty');
      return null;
    }
    const temp = this.#list[this.#top];
    delete this.#list[this.#top--];
    return temp;
  }
  peek() {
    return this.#list[this.#top];
  }
}

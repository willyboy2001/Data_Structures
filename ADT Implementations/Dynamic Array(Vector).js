class Vector {
  #capacity;
  #content;
  #size;
  constructor(...args) {
    // rest parameters cannot  have a default initialiser
    this.#capacity = args?.length || 1;
    this.#content = Array(this.#capacity);
    this.#size = args.length;
    if (args) {
      for (let i = 0; i < this.#size; i++) {
        this.#content[i] = args[i];
      }
    }
  }

  push(key) {
    if (this.#size === this.#capacity) {
      this.#capacity *= 2;
      const newArr = Array(this.#capacity);
      for (let i = 0; i < this.#size; i++) {
        newArr[i] = this.#content[i];
      }
      this.#content = newArr;
    }
    this.#content[this.#size] = key;
    return ++this.#size;
  }

  pop() {
    if (!this.#size) return null;
    const poppedEle = this.#content[this.#size - 1];
    delete this.#content[this.#size - 1];
    this.#size--;
    return poppedEle;
  }

  get(index) {
    return this.#content[index];
  }

  front() {
    return this.#content[0];
  }
  back() {
    return this.#content[this.#size - 1];
  }
}

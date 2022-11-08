class HashTable {
  // COnvention- The identifier names should be in ca[s]
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const weirdPrime = 137;
    const limit = 100;
    const str = key.slice(0, Math.min(key.length, limit));
    const total = Array.from(str).reduce((acum, ele) => {
      // console.log(acum, `\t`, ele.charCodeAt(0));
      // console.log(acum * weirdPrime + ele.charCodeAt(0));
      return (acum * weirdPrime + ele.charCodeAt(0)) % this.keyMap.length;
    }, 0);
    // console.log(total);
    return total;
  }
  set(key, value) {
    const index = this._hash(key);
    let innerIndex = this.keyMap[index];
    if (Array.isArray(innerIndex)) {
      const index = innerIndex.map(ele => ele[0]).indexOf(key);
      if (index >= 0) innerIndex[index][1] = value;
      else innerIndex.push([key, value]);
    } else {
      this.keyMap[index] = [];
      this.keyMap[index].push([key, value]);
    }
    return this.keyMap;
  }
  get(key) {
    const index = this._hash(key);
    const innerIndex = this.keyMap[index];
    if (!Array.isArray(innerIndex)) {
    
      console.log('The key is invalid');
      return null;
    }

    for (const ele of innerIndex) {
      // elel[0]===key && return ele[1]; Doesnt work. Syntax works only when both sides are expressions
      if (ele[0] === key) return ele[1];
    }
  }

  keys() {
    return this.keyMap
      .flat()
      .map(ele => ele[0])
      .filter(ele => ele !== undefined); 
  }
  values() {
    return new Set(
      this.keyMap
        .flat()
        .map(ele => ele[1])
        .filter(ele => ele !== undefined)
    );
  }
}

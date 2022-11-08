const insertionSort = function (arr) {
  const copy = arr.slice(0);

  for (let i = 1; i < arr.length; i++) {
    //3
    let posInSortedPart = -1;
    for (let j = 0; j <= i - 1; j++) {
      if (copy[i] < copy[j]) {
        // Be wary, very tricky, copy from rightmost values ,if not we may lose some values;
        posInSortedPart = j;
        console.log(i, j);
        console.log(j);
        break;
      }
    }
    if (posInSortedPart !== -1) {
      let curr = copy[i]; //i=2
      for (let k = i - 1; k >= posInSortedPart; k--) {
        copy[k + 1] = copy[k];
        // console.log(copy);
        // copy.splice(posInSortedPart, 0, copy[i]); // using splice. Note that the big O remains the same. Just that it is more expensive.
        //   copy.splice(i + 1, 1);
      }
      copy[posInSortedPart] = curr;
    }
    console.log(copy);
  }

  console.log(copy);
  return copy;
};

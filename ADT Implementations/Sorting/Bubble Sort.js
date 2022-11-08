function bubbleSort(arr) {
  let sorted = true;
  let endIndex = arr.length;
  while (endIndex > 1) {
    for (let i = 0; i < endIndex - 1; i++) {
      numInterations++;
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) break;
    endIndex--;
    sorted = true;
  }
  console.log(numInterations);
  numInterations = 0;
  return arr;
}

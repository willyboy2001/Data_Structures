function selectionSort(arr) {
  let minIndex = 0;
  let startingIndex = 0;

  while (startingIndex < arr.length - 1) {
    for (let i = startingIndex + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    const temp = arr[startingIndex];
    arr[startingIndex] = arr[minIndex];
    arr[minIndex] = temp;
    startingIndex++;
    minIndex = startingIndex;
  }

  return arr;
}

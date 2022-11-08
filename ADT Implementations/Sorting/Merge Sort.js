function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      console.log(results);
      i++;
    } else {
      results.push(arr2[j]);
      console.log(results);

      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  const firstPart = mergeSort(arr.slice(0, Math.trunc(len / 2))); // recommended to use slice
  const secondPart = mergeSort(arr.slice(Math.trunc(len / 2)));

  return merge(firstPart, secondPart);
}

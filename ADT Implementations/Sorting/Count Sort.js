function countSort(arr) {
  let min;
  let max = (min = arr[0]);
  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  const range = max - min + 1;
  const frequencyArr = Array.from({ length: range }).fill(0);
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i] - min]++;
  }
  // console.log(frequencyArr);

  for (let i = 0; i < range; i++) {
    while (frequencyArr[i] > 0) {
      arr[j] = i + min;
      j++;
      frequencyArr[i]--;
    }
  }

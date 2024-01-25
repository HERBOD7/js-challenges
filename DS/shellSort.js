const shellSort = (arr) => {
  const n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        // arr[j] = arr[j - gap];
        [arr[j - gap], arr[j]] = [arr[j], arr[j - gap]];
      }
      //   arr[j] = temp;
    }
  }
  return arr;
};

console.log(shellSort([7, 6, 8, 9, 3, 2, 10, 5, 1]));

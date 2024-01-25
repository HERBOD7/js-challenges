function swap(array, first, second) {
  const temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

function BubbleSort(array) {
  let isSorted = false;
  let lastUnsorted = array.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  console.log(array);
}

const list = [6, 7, 3, 2, 1, 4, 9];
BubbleSort(list);

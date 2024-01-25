const insertionSort = (arr) => {
  const selectedItem = 1;
  const recursiveSort = (arr, selectedItem) => {
    let tempIndex = selectedItem;
    for (let i = 0; i < selectedItem; i++) {
      const prevItem = selectedItem - (i + 1);
      console.log(arr[i], arr[prevItem], i);
      if (arr[prevItem] > arr[tempIndex]) {
        const largeItem = arr[prevItem];
        arr[prevItem] = arr[tempIndex];
        arr[tempIndex] = largeItem;
        tempIndex = prevItem;
      }
    }
    if (selectedItem < arr.length - 1) {
      recursiveSort(arr, selectedItem + 1);
    }
    return arr;
  };
  return recursiveSort(arr, selectedItem);
};

console.log(insertionSort([7, 8, 6, 3, 9], 1));
console.log(insertionSort([10, 2, 3, 4, 7, 8, 6, 9], 1));

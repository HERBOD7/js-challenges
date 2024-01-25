const selectSort = (arr) => {
  // create new reference to the same array
  let newArray = arr.slice();
  const findSmallest = (arr, index) => {
    if (index < arr.length - 1) {
      let smallestItem = {
        value: arr[index + 1],
        index: index + 1,
      };
      for (let i = index + 1; i < arr.length; i++) {
        console.log(index, index + 1, arr.length);
        if (arr[i] < smallestItem.value) {
          smallestItem.value = arr[i];
          smallestItem.index = i;
        }
      }
      if (arr[index] > smallestItem.value) {
        newArray[smallestItem.index] = arr[index];
        newArray[index] = smallestItem.value;
      }
      findSmallest(newArray, index + 1);
    }
  };
  findSmallest(newArray, 0);
  return newArray;
};

const selectSort2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectSort([10, 7, 8, 6, 3]));
console.log(selectSort([3, 4, 11, 8, 5, 6]));
console.log(selectSort([1, 12, 3, 6, 5, 10, 2]));

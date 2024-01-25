// https://www.hackerrank.com/challenges/insertionsort2/problem

// In this challenge, print the array after each iteration of the insertion sort, i.e.,
//    whenever the next element has been inserted at its correct position.
//    Since the array composed of just the first element is already sorted,
//    begin printing after placing the second element.

// Sample Input: n = 6 , arr = [1, 4, 3, 5, 6, 2]
// Sample Output
// 1 4 3 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 2 3 4 5 6

function insertionSort2(n, arr) {
  const selectedItem = 1;
  const recursiveSort = (arr, selectedItem) => {
    let tempIndex = selectedItem;
    for (let i = 0; i < selectedItem; i++) {
      const prevItem = selectedItem - (i + 1);
      if (arr[prevItem] > arr[tempIndex]) {
        const largeItem = arr[prevItem];
        arr[prevItem] = arr[tempIndex];
        arr[tempIndex] = largeItem;
        tempIndex = prevItem;
      }
    }
    console.log(arr.join(" "));
    if (selectedItem < n - 1) {
      recursiveSort(arr, selectedItem + 1);
    }
    return arr;
  };
  return recursiveSort(arr, selectedItem);
}

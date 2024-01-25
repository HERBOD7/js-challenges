// https://www.hackerrank.com/challenges/insertionsort1/problem

// Sample Input: n = 5 , arr = [1, 2, 4, 5,3]
// Sample Output
// 1 2 4 5 5
// 1 2 4 4 5
// 1 2 3 4 5

function insertionSort1(n, arr) {
  const selectedItem = 1;
  const recursiveSort = (arr, selectedItem) => {
    let tempIndex = selectedItem;
    for (let i = 0; i < selectedItem; i++) {
      const prevItem = selectedItem - (i + 1);
      let temArr = arr.slice();
      if (arr[prevItem] > arr[tempIndex]) {
        const largeItem = arr[prevItem];
        temArr[tempIndex] = largeItem;
        console.log(temArr.join(" "));
        arr[prevItem] = arr[tempIndex];
        arr[tempIndex] = largeItem;
        tempIndex = prevItem;
        temArr = arr;
      }
    }
    if (selectedItem < arr.length - 1) {
      recursiveSort(arr, selectedItem + 1);
    }
    return arr;
  };
  const result = recursiveSort(arr, selectedItem);
  console.log(result.join(" "));
  return result;
}

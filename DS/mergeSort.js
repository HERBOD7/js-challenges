// function MergeSort(array) {
//   split(0, array.length - 1);
// }

// function split(low, high) {
//   if (low >= high) return;
//   const mid = Math.floor((low + high) / 2);
//   split(low, mid);
//   split(mid + 1, high);
//   merge(low, mid, high);
// }

// function merge(low, mid, high) {
//   let i = low;
//   let j = mid + 1;
//   let tempp = low;
//   // compare left and right items of the splitted array
//   while (i <= mid && j <= high) {
//     if (array[i] <= array[j]) {
//       temp[tempp++] = array[i++];
//     } else {
//       temp[tempp++] = array[j++];
//     }
//   }

//   while (i <= mid) temp[tempp++] = array[i++];
//   while (j <= high) temp[tempp++] = array[j++];

//   // replace first array with sorted array
//   for (tempp = low; tempp <= high; tempp++) {
//     array[tempp] = temp[tempp];
//   }
// }

// const array = [10, 8, 7, 3, 6, 9, 5, 4];
// let temp = new Array(array.length);
// MergeSort(array);
// console.log(temp);

// =================================================================

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // =========(better performance) 1 : return result using while loop ========
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}
// ======= 2 : return result using concat ========
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// // Example usage:
const arr = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(arr));

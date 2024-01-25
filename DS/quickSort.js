//======1================================

function swap(from, to, array) {
  const temp = array[from];
  array[from] = array[to];
  array[to] = temp;
  return array;
}

function QuickSort(from, to, array) {
  if (from >= to) return;
  const pivot = array[to];
  let counter = from;
  for (let i = from; i < to; i++) {
    if (array[i] < pivot) {
      swap(counter, i, array);
      counter++;
    }
  }

  swap(counter, to, array);
  QuickSort(from, counter - 1, array);
  QuickSort(counter + 1, to, array);
  return array;
}

const list = [4, 7, 8, 3, 2, 6];
const lastElement = list.length - 1;
console.log(QuickSort(0, lastElement, list));

// ===2================================================
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     const pivotIndex = partition(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   const pivotValue = arr[right];
//   let pivotIndex = left;
//   for (let i = left; i < right; i++) {
//     if (arr[i] < pivotValue) {
//       swap(arr, i, pivotIndex);
//       pivotIndex++;
//     }
//   }
//   swap(arr, pivotIndex, right);
//   return pivotIndex;
// }

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// ==3==============
// function quicksort(array) {
//   if (array.length <= 1) {
//       return array;
//   } else {
//       var pivot = array[0];
//       var left = [];
//       var right = [];
//       for (var i = 1; i < array.length; i++) {
//           if (array[i] < pivot) {
//               left.push(array[i]);
//           } else {
//               right.push(array[i]);
//           }
//       }
//       return quicksort(left).concat(pivot, quicksort(right));
//   }
// }

function RecursiveBinarySearch(n, left, right, array) {
  if (left >= right) return;
  const mid = Math.round((left + right) / 2);
  if (n === array[mid]) {
    return mid;
  } else if (n < array[mid]) {
    RecursiveBinarySearch(n, left, mid - 1, array);
  } else {
    RecursiveBinarySearch(n, mid + 1, right, array);
  }
}

function IterativeBinarySearch(n, array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let mid = Math.round((left + right) / 2);
    if (n === array[mid]) {
      return mid;
    } else if (n < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

const list = [1, 4, 5, 6, 9, 12, 17, 25, 26];
console.log(RecursiveBinarySearch(12, 0, list.length, list));
console.log(IterativeBinarySearch(17, list));

var sortPeople = function (names, heights) {
  const copyOfHeights = [...heights];
  function swap(from, to, array) {
    [array[from], array[to]] = [array[to], array[from]];
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

  let result = [];
  const lastElement = heights.length - 1;
  if (heights.length > 1) {
    const sortedHeight = QuickSort(0, lastElement, heights);
    if (sortedHeight && sortedHeight.length) {
      for (let i = 0; i < sortedHeight.length; i++) {
        const index = copyOfHeights.indexOf(sortedHeight[i]);
        result[sortedHeight.length - i - 1] = names[index];
      }
    }
  } else {
    result = names;
  }

  return result;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Bob","Alice","Bob"]

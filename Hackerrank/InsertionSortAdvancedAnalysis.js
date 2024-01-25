function insertionSort(arr) {
  let totalShifts = 0;
  for (let i = 1; i < arr.length; i++) {
    let j;
    let v = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] <= v) {
        break;
      }
      arr[j + 1] = arr[j];
      totalShifts++;
    }
    arr[j + 1] = v;
  }
  // let selectedItem = 1;
  // let totalShifts = 0;
  // while(selectedItem < arr.length) {
  //     let tempIndex = selectedItem;
  //     for (let i = 0; i < selectedItem; i++) {
  //         const prevItem = selectedItem - (i + 1);
  //         if (newArr[prevItem] > newArr[tempIndex]) {
  //             [newArr[prevItem], newArr[tempIndex]] = [newArr[tempIndex], newArr[prevItem]];
  //             tempIndex = prevItem;
  //             totalShifts++;
  //         }
  //     }
  //     selectedItem++;
  // }
  return totalShifts;
}

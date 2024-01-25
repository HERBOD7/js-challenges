// O(n^2)
// var maxProduct = function (nums) {
//   let result = 0;
//   let NumsLength = nums.length;
//   for (let i = 0; i < NumsLength; i++) {
//     for (let j = 0; j < NumsLength; j++) {
//       if (i !== j) {
//         const multiple = (nums[i] - 1) * (nums[j] - 1);
//         if (multiple > result) result = multiple;
//       }
//     }
//   }
//   return result;
// };

// O(n)
var maxProduct = function (nums) {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max2 = nums[i];
    }
  }
  return (max1 - 1) * (max2 - 1);
};

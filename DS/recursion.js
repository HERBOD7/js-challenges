function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// console.time("6");
// console.log(fib(6));
// console.timeEnd("6");

function memoizedFib(n) {
  let fibItems = [];
  function generalFib(n) {
    if (fibItems[n]) {
      return fibItems[n];
    }
    if (n <= 1) {
      fibItems[n] = n;
      return n;
    } else {
      let sum = generalFib(n - 1) + generalFib(n - 2);
      if (sum.toString().length > 6) {
        const sumArray = sum.toString().split("");
        sumArray.splice(0, sumArray.length - 6);
        // for(let i = 0; i < sumArray.length - 6; i++) {
        //   sumArray.shift();
        // }
        const joinedItems = sumArray.join("");
        sum = +joinedItems;
      }
      fibItems[n] = sum;
      return sum;
    }
  }
  return generalFib(n);
}

console.time("36");
console.log(memoizedFib(36));
console.timeEnd("36");

function jump(a) {
  let counter = 0;
  function nextJump(n) {
    if (a[n]) {
      const nextPawn = a[n];
      const nextIndex = n + nextPawn;
      const iterativeJump = a[nextIndex] + nextIndex === n;
      if (iterativeJump) {
        return -1;
      }
      counter++;
      return nextJump(nextIndex);
    } else {
      return counter;
    }
  }
  return nextJump(0);
}

// console.time("arr");
// console.log(jump([2, 3, -1, 1, 3, 1, 2, 4, 1, 3]));
// console.log(jump([1, 1, -1, 1]));
// console.timeEnd("arr");

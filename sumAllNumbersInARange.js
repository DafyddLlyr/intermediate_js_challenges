/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. */

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let fullArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }
  return fullArr.reduce((a, b) => a + b);
}

sumAll([1, 4]);
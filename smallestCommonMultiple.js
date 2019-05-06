/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let fullArr = [];

  for (let i = arr[0]; i <= sortedArr[1]; i++){
    fullArr.push(i);
  }

  function gcd(a, b) {
    if (!b) {
      return a;
    } 
    return gcd(b, a % b);
  }

   function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  return fullArr.reduce(lcm);
}


smallestCommons([1,26]);
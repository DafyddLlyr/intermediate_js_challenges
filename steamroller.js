// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')
    .split(',')
    .map(function(x) {
      if (x == '[object Object]') {
        return {};
      } else if (isNaN(x)) {
        return x;
    } else {
      return parseInt(x);
    }
    });
}

steamrollArray([1, [2], [3, [[4]]]]);
/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object. */

function destroyer(arr) {
  let myArr = Array.prototype.slice.call(arguments);
  let search = myArr.shift();
  let destroy = myArr;
  let result = [];

  for (let i = 0; i < search.length; i++) {
    if (!destroy.includes(search[i])) {
      result.push(search[i])
    }
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
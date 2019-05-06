/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let first = str.charAt(0);
  let last = str.charAt(str.length - 1);

  let fullArr = alphabet.slice(alphabet.indexOf(first), alphabet.indexOf(last) + 1);

  for(let i = 1; i < fullArr.length - 1; i++) {
    if(!str.split('').includes(fullArr[i])) {
      return fullArr[i];
    }
  } return undefined;
}

fearNotLetter("abce");
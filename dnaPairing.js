/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {
  let dnaArr = str.split('');
  for (let i = 0; i < dnaArr.length; i++) {
    dnaArr[i] = (dnaArr[i].split(''))
    console.log(dnaArr[i]);
    if (dnaArr[i] == 'A') {dnaArr[i].push('T')};
    if (dnaArr[i] == 'T') {dnaArr[i].push('A')};
    if (dnaArr[i] == 'C') {dnaArr[i].push('G')};
    if (dnaArr[i] == 'G') {dnaArr[i].push('C')};
} 
return dnaArr;
}

pairElement("ACG");
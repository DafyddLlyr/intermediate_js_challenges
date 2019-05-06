//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let myRegex = /(?=[A-Z])|\s|_|-/g
  return str.split(myRegex).join('-').toLowerCase();

//split by non-lowercase characters?



}

spinalCase("AllThe-small Things");
spinalCase("The_Andy_Griffith_Show");
spinalCase("thisIsSpinalTap")
spinalCase("Teletubbies say Eh-oh")
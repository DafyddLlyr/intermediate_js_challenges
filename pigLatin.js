/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstCons = /([aeiou].*)/

  if (vowels.includes(str.charAt(0))) {
    return str + 'way'
  }

  let result = str.split(firstCons);
  
  if (result.length == 1) {
    return str + 'ay';
  }

  result.push(result.shift());
  
  if(vowels.includes(result[0].charAt(0))) {
    return result.join('') + 'ay'; 
  } else {
    return result.push(result[0].charAt(0))
  }
}

translatePigLatin("california");
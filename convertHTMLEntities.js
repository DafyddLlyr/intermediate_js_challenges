// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let myArr = str.split('');
  
  return myArr.map(function(x) {
    return  x == '&' ? '&amp;'
          : x == '<' ? '&lt;'
          : x == '>' ? '&gt;'
          : x == '"' ? '&quot;'
          : x == "'" ? '&apos;'
          : x
  })
  .join('')
}

convertHTML("Dolce & Gabbana");
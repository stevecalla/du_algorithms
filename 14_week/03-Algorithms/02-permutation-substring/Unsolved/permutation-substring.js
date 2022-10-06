// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
  let newString = [];
  let subLength = sub.length;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i] === sub[j] && !newString.includes(str[i])) {
        // console.log(newString);
        newString.push(str[i]);
        // console.log(newString);
      }
    }
  }
  console.log(str, sub, sub.length, newString, newString.length)
  return subLength === newString.length
};

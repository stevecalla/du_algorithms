// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  console.log(strA, strB);
  //convert str to array (split), sort the array, convert array to string (join);
  let sortStrA = strA.split('').sort().join('');
  let sortStrB = strB.split('').sort().join('');
  console.log(sortStrA, sortStrB);

  //compare sorted strings, if equal then isAnagram = true
  let isAnagram = false;
  if (sortStrA === sortStrB) {
    isAnagram = true;
  }
  return isAnagram;
};

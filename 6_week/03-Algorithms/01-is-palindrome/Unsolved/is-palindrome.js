// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
//   // console.log(str.length);

//   let strArray = str.split('').reverse();
//   let reversedString = strArray.join('');

//   console.log(str, reversedString);

//   return reversedString === str;
// };

var isPalindrome = function(str) {
  // console.log(str.length);
  let lengthX = str.length - 1; //use to decrement str length
  let strArray = str.split(''); //create array from original string
  let reverseString = [];

  for (let i = 0; i < str.length; i++) {
    reverseString[lengthX] = strArray[i];
    console.log(reverseString);
    lengthX--;
  }
  console.log(reverseString)
  reverseString = reverseString.join('');

  console.log(str, reverseString);

  return reverseString === str;
};


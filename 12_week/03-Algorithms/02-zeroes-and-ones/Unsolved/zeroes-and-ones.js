// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {

  let sum = str.split('').map(element => parseInt(element)).reduce((acc, cur) => acc + cur, 0);

  let sameNumOneZero = false;

  if ((str.length / sum) % 2 === 0 || str.length === 0) {
    return true;
  }

  // console.log(str.length, sum, str.length / sum, (str.length / sum) % 2 === 0, even);

  return false;

};

// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  let perfectSqaure = false;

  if (num || num === 0) {
    for (let i = 0; i <= num; i++) {
      if (i * i  === num || num === 0) {
        console.log('#1 = ', num, i, i * i, perfectSqaure)
        perfectSqaure = true;
        return perfectSqaure;
      } 
    }
  }

  console.log('#2 = ', num, perfectSqaure)
  return perfectSqaure;

};

isPerfectSquare();

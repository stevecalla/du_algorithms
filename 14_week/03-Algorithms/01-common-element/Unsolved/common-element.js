// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
  let longArr = [];
  let shortArr = []; 
  let finalValue = 0;

  arrA.length >= arrB.length ?
    (longArr = arrA, shortArr = arrB) : 
    (longArr = arrB, shortArr = arrA);

  console.log('A = ', arrA, arrA.length);
  console.log('B = ', arrB, arrB.length);
  console.log('LA = ', longArr);
  console.log('LB = ', shortArr);

  for (let i = 0; i < longArr.length; i++) {
    for (let j = 0; j < shortArr.length; j++) {
      if (longArr[i] === shortArr[j]) {
        console.log(longArr[i], shortArr[j])
        finalValue = longArr[i];
        // return;
      }
    }
  }
  console.log(finalValue);
  return finalValue;
};

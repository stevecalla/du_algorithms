// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

// const { start } = require("repl");

var arrayIntersection = function(arr1, arr2) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let startArray = [];
  let secondArray = [];
  let finalArray = [];

  if (arr1Length > arr2Length) {
    startArray = arr1;
    secondArray = arr2;
  } else {
    startArray = arr2;
    secondArray = arr1;
  }
  
  for (let i = 0; i < startArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (startArray[i] === secondArray[j]) {
        finalArray.push(startArray[i])
      }
    }
  }

  console.log('start array = ', startArray);
  console.log('second array = ', secondArray);
  console.log('finalArray = ', finalArray);

  return finalArray;

};

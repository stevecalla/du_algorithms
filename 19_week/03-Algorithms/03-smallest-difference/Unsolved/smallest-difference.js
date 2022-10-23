// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

var smallestDifference = function (arr1, arr2) {
  let maxArray = [];
  let minArray = [];
  let diff = 0;
  let min_diff = 100000;
  let value_1;
  let value_2;
  let finalArray = [];

  arr1.length >= arr2.length ? maxArray = arr1 : maxArray = arr2;
  arr1.length >= arr2.length ? minArray = arr2 : minArray = arr1;

  // STEP #1: compare each element in maxArray to minArray
  for (let i = 0; i < maxArray.length; i++) {
    for (let j = 0; j < minArray.length; j++) {

      // STEP #2: determine the difference between maxArray element less minArray element
      diff = Math.abs(maxArray[i] - minArray[j]);
      
      // console.log(maxArray[i], minArray[j], { diff, min_diff });

      // STEP #3: if difference is smaller than prior min diff then (a) reassign min_diff and record element of both maxArray and minArray
      if (Math.abs(diff) < Math.abs(min_diff)) {
        min_diff = Math.abs(diff);
        value_1 = maxArray[i];
        value_2 = minArray[j];

        // console.log({ diff, min_diff, value_1, value_2 });
      }
    }
  }
  // STEP #4: assign final array the value_1 and value_2
  finalArray = [ value_1, value_2 ];
  // console.log({ arr1, arr2, maxArray, minArray, value_1, value_2, finalArray });
  // console.log({ finalArray });
  console.log( maxArray, minArray );
  console.log( finalArray );
  console.log( '-----------' );
  return finalArray;
};

smallestDifference([1, 6, 7, 9], [8, 9, 10, 11, 12, 13]);
smallestDifference([1, 2, 3, 5, 6], [0, 2, 4, 8, 10]);

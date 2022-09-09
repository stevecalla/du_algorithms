// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  console.log(arr3);

  arr3.sort(function (a, b) {
    return a - b;
  });

  console.log('3 = ', arr3);
  console.log('---------')

  return arr3;

};

// // numeric sorting

//   // define array
//   var priceList = [1000, 50, 2, 7, 14];

//   // sort() using function expression
//   // ascending order
//   priceList.sort(function (a, b) {
//     return a - b;
//   });

//   // Output: Ascending - 2,7,14,50,1000
//   console.log("Ascending - " + priceList);

//   // sort() using arrow function expression
//   // descending order
//   priceList.sort((a, b) => b - a);

//   // Output: Descending - 1000,50,14,7,2
//   console.log("Descending - " + priceList);

//   https://www.programiz.com/javascript/library/array/sort

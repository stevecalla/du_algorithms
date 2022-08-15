// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
// var test = function() {

  // let arr = [20, 10, 30, 6, 3];
  // let arr = [4, 8, 15, 16, 23, 42];
  // let arr = [9, 8, 16, 42, 23, 15];
  // let arr = [-10, -5, -2, -15, -1, -33, -88, -100];
  console.log(arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  
  largest = arr[arr.length - 1];
  secondLargest = arr[arr.length - 2];
  
  console.log(arr);
  console.log(largest, secondLargest, largest * secondLargest);

  return largest * secondLargest;

};

// var productOfLargestTwo = function(arr) {
  var test = function(arr) {
  
    // let arr = [20, 10, 30, 6, 3];
    // let arr = [4, 8, 15, 16, 23, 42];
    // let arr = [9, 8, 16, 42, 23, 15];
    // let arr = [-10, -5, -2, -15, -1, -33, -88, -100];
    console.log(arr);
  
    arr.sort(function (a, b) {
      return a - b;
    });
    
    largest = arr[arr.length - 1];
    secondLargest = arr[arr.length - 2];
    
    console.log(arr);
    console.log(largest, secondLargest, largest * secondLargest);
  
    return largest * secondLargest;
  
  };

  let arr1 = [20, 10, 30, 6, 3];
  let arr2 = [4, 8, 15, 16, 23, 42];
  let arr3 = [9, 8, 16, 42, 23, 15];
  let arr4 = [-10, -5, -2, -15, -1, -33, -88, -100];

  test(arr1);
  test(arr2);
  test(arr3);
  test(arr4);


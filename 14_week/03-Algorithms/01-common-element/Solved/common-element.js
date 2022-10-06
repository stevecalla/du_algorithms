// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
  var elements = {};
  console.log(arrA, arrB);

  for (var i = 0; i < arrA.length; i++) {
    var num = arrA[i];
    elements[num] = true;
    console.log(num, arrA[i], elements[num])
  }
  console.log(elements)

  for (var i = 0; i < arrB.length; i++) {
    var num = arrB[i];

    
    console.log(num, arrB[i])
    if (elements[num]) {
      console.log(num, arrB[i], elements[num])
      return num;
    }
  }
};

// This could also be achieved using a Set data structure

// var commonElement = function(arrA, arrB) {
//   var elements = new Set();

//   for (var i = 0; i < arrA.length; i++) {
//     var num = arrA[i];
//     elements.add(num);
//   }

//   for (var i = 0; i < arrB.length; i++) {
//     var num = arrB[i];

//     if (elements.has(num)) {
//       return num;
//     }
//   }
// };

// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  // let largetTwo = [];
  let previousElement = 0;
  let largest = 0;
  let secondLargest = 0;

  arr.forEach(element => {
    if (element > largest) {largest = element}

    
    previousElement = element

    console.log('e = ', element, 'l = ', largest, '2nd = ', secondLargest, 'prior = ', previousElement);
    
    if (previousElement < largest) {secondLargest = previousElement};

  })

  console.log(largest, secondLargest, largest * secondLargest)
  // return largest * secondLargest;

};

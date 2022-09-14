// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
  return arr.map(element => 
    Math.pow(element, 2))
    .sort((a, b) => a - b)
};

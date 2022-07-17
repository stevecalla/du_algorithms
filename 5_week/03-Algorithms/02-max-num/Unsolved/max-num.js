// Write code to return the largest number in the given array

var maxNum = function(arr) {

  let targetNumber = 0;
  arr.forEach(number => {
    number > targetNumber ? targetNumber = number : targetNumber = targetNumber;
    console.log(targetNumber);
  })
  console.log(targetNumber)
  return targetNumber;
};

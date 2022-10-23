// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

var isArmstrong = function(num) {
  let number = num;
  let splitNum = number.toString().split('')

  // convert each element to a number equal to the element raised to the power of the length of the array then get the sum (using reduce) of all the numbers in the array 
  splitNum = splitNum.map(element => element ** splitNum.length ).reduce((cur, acc) => cur + acc);

  console.log({ num, number, splitNum }, 'isArmstrong = ', num === splitNum);

  //return if the num is equal to the sum of the parts raised to the length of the number
  return num === splitNum;

};

isArmstrong(153);
isArmstrong(11)

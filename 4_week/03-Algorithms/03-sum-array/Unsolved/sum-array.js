// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
  console.log(arr);

  //SECTION: OPTION #1
  // let resultOfAddition = 0;
  // let initialValue = 0;
  // resultOfAddition = arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

  //SECTION: OPTION #2

  // let resultOfAddition = 0;
  // let initialValue = 0;
  // resultOfAddition = arr.reduce((previousValue, currentValue) => {
  //   console.log(currentValue, previousValue, currentValue + previousValue, initialValue);
  //   return currentValue + previousValue;
  // });

  //SECTION: OPTION #3

  let resultOfAddition = 0;
  for (let i = 0; i < 6; i++) {
    resultOfAddition = arr[i] + resultOfAddition;
    console.log(resultOfAddition);
  }


  return resultOfAddition;

};

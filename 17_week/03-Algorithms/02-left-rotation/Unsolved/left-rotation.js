// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {

  // section reverse array with 4 loop
  // console.log(arr);
  
  // let reverseArr = [];
  
  // for(let i = 0; i < arr.length; i++) {
  //   reverseArr[arr.length - i - 1] = arr[i]
  // }

  // console.log(reverseArr);
  // console.log('-------')
  // return reverseArr;

  // section reverse array with map
  // console.log(arr)
  // let test = arr.map((element, index) => {
  //   return arr[arr.length - index - 1]
  // })

  // console.log(test)
  // return test;


  // section change position with map
  console.log(arr)
  let test = arr.map((element, index) => {
    // return arr[arr.length - index - 1]
    // console.log(arr.length, positions, index, (arr.length + positions + index) % arr.length)
    // return arr[arr.length - positions - index]
    return arr[(arr.length + positions + index) % arr.length]
  })

  console.log(test)
  console.log('-------')
  return test;
};

// leftRotation([4, 5, 6]);

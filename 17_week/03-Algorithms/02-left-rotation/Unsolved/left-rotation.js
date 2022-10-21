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
  // console.log(arr)
  // let test = arr.map((element, index) => {
  //   // return arr[arr.length - index - 1]
  //   // console.log(arr.length, positions, index, (arr.length + positions + index) % arr.length)
  //   // return arr[arr.length - positions - index]
  //   return arr[(arr.length + positions + index) % arr.length]
  // })

  // console.log(test)
  // console.log('-------')
  // return test;

  if (arr.length === 0) {
    return;
  }

  // section from DU solutions
  console.log('0 = arr / positions = ', arr, positions);
  
  // while (positions > 0) {
  //   console.log('1 positions = ', positions);
    
  //   const first = arr.shift();
  //   // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

  //   console.log('2 first = ', first, arr);

  //   arr.push(first);

  //   console.log('3 arr = ', arr);

  //   positions--;

  //   console.log('4 positions = ', positions, arr);
  //   console.log('---------------');
  // }
  
  // console.log('5 arr = ', arr)
  // console.log('---------------');
  // console.log('---------------');


  // section revised above using for loop to simplify
  for (let i = 0; i < positions; i++) {
    console.log('1 positions = ', positions);
    
    const first = arr.shift();
    // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

    console.log('2 first = ', first, arr);

    arr.push(first);

    console.log('3 arr = ', arr);

    // positions--;

    console.log('4 positions = ', positions, arr);
    console.log('---------------');
  }
  
  console.log('5 arr = ', arr)
  console.log('---------------');
  console.log('---------------');
};

// leftRotation([4, 5, 6]);

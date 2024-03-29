// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  // console.log('1 =', arr)
  // console.log(arr.reverse())
  // console.log('------------')

  // return arr;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
};

reverseInPlace([1, 2, 3, 4, 5]);

// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
  //section: solution #1 using for loop
  // let targetIndex = -1;
  // console.log('1 = ', arr, 't = ', target);

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i], target, arr[i] === target)
  //   if (arr[i] === target) {
  //     targetIndex = i;
  //   }
  // }

  //section: solution #2 using filter
  let targetIndex = -1;
  console.log('1 = ', arr, 't = ', target);
  let targetIndex2 = arr.filter((element, index) => {
    if (element === target) {
      targetIndex = index;
    }
    console.log(index, element, target, targetIndex, element === target);
  })
  console.log('------------')
  return targetIndex;  

  //section: solution #3 using reduce
  // let targetIndex = -1;
  // console.log('1 = ', arr, 't = ', target);
  // let targetIndex2 = arr.reduce((prev, cur, curIndex) => {
  //   if (cur === target) {
  //     targetIndex = curIndex;
  //   }
  //   console.log(curIndex, prev, cur, target, targetIndex, cur === target);
  // }, 0)
  // console.log('------------')
  // return targetIndex;
}

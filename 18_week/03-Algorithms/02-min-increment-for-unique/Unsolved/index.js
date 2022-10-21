// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
  console.log('test')
  let minSum = 0;
  let diff = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums.length);
    // nums = nums.sort();
    nums = nums.sort((a, b) => a - b);
    console.log(nums);
    let start = nums[0];
    console.log(start)

    diff = (start) - nums[i];
    if (diff > 0) {minSum = minSum + diff};
    console.log(diff, minSum);
  }

  console.log(minSum);
  console.log('---------------');
  return minSum;
};

test = [3,2,1,2,1,7]; //6
minIncrement(test);

test2 = [2, 2, 1 ]; //6
minIncrement(test2);

// test3 = [8,6,8,9,10]; //3
// minIncrement(test3);

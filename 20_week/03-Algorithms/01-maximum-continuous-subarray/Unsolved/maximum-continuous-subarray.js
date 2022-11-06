const maxSumArray = function(numbers) {
  // Write your solution here
  let temp = numbers[0];
  let sum2 = 0;

  for (let i = 0; i < numbers.length; i++) {
    let numberI = numbers[i]

    console.log('Start = ', {numberI, sum2, temp})

    console.log(numbers[i], ' + ', sum2, ' = ', numbers[i] + sum2)
    
    sum2 = numbers[i] + sum2;

    console.log(sum2, ' >= ', temp, sum2 >= temp)

    // if (numbers[i] - sum2 > sum2) {
    //   temp = numbers[i]
    // } else {
    //   temp = sum2
    // }
    if (sum2 >= temp) {temp = sum2}

    // if (sum2 > temp) {
    //   temp = sum2
    // }

    // if (sum2 !== temp) {
    //   temp = 0;
    //   sum2 = 0;
    // }

    console.log('End = ', {numberI, sum2, temp})
    console.log('-----')
  }


  return temp;

};

maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6
// maxSumArray([1, 2, -50, 4, 5]); //9
// maxSumArray([-1, 2]); //1

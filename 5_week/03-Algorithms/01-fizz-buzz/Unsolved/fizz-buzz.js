// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
  // console.log(arr);

  let fizzBuzzResults = [];
  // console.log(fizzBuzzResults)

  
  arr.forEach(number => {
    // console.log(number)

    number % 5 === 0 && number %3 === 0 ? fizzBuzzResults.push('\"Fizz Buzz\"') : number % 5 === 0 ? fizzBuzzResults.push('\"Buzz\"') : number % 3 === 0 ? fizzBuzzResults.push('\"Fizz\"') : fizzBuzzResults.push(number); 

    number % 5 === 0 && number %3 === 0 ? console.log('\"Fizz Buzz\"') : number % 5 === 0 ? console.log('\"Buzz\",') : number % 3 === 0 ? console.log('\"Fizz\",') : console.log(`${number},`); 
  })

  // console.log(fizzBuzzResults)
  // let string = fizzBuzzResults.join();
  // console.log(string);

  return string;
};

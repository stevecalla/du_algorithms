// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  let factorialResult = 1;
  for (let i = 1; i < num + 1; i++) {
    console.log('i=', i, 'num=', num, 'result=', i * factorialResult, `= ${i} * ${factorialResult}`);
    factorialResult = factorialResult * (i);
  }
  console.log('num = ', num, 'return = ', factorialResult);
  console.log('------------')
  return factorialResult;
};

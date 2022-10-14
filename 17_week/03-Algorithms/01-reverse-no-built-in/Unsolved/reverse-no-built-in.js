// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
  // console.log('hello');
  // console.log('hello'.split(''));

  str = str.split('');
  console.log(str);
  
  let reverseStr = [];
  
  for(let i = 0; i < str.length; i++) {
    let reverse = str.length - i - 1
    reverseStr.push(str[reverse]);
  }

  console.log(reverseStr.join(''));
  return reverseStr.join('');


};

// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    object[str[i]] = 0;
    // console.log(object)
  }

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    object[str[i]] = object[str[i]] + 1;
    // console.log(object)
  }
  
  console.log(object)
  return object;

};

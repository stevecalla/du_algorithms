// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  let object = {};

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    object[arr[i]] = 0;
    // console.log(object)
  }

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    object[arr[i]] = object[arr[i]] + 1;
    // console.log(object)
  }

  // Object.keys(object);
  let hasNoDuplicates = true;
  if (Object.values(object).includes(2)) {
    hasNoDuplicates = false;
  }
  
  // console.log(object)
  // return object;
  console.log(Object.values(object));
  return hasNoDuplicates;

};

// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  // console.log(str);
  let strArray = str.split('');
  // console.log(strArray.length)
  let capArray = []; 

  for (let i = 0; i < strArray.length; i++) {
    // console.log(i, strArray[i]);

    strArray[i] === " " ? (
      // console.log('space'),
      capArray.push(strArray[i]),
      capArray.push(strArray[i + 1].toUpperCase()),
      i = i + 1
      ) : 
      i === 0 ? capArray.push(strArray[i].toUpperCase()) :
      capArray.push(strArray[i])
    
  }
  console.log(str);
  console.log(capArray.join(''))
  console.log('----------')
  return capArray.join('');
};

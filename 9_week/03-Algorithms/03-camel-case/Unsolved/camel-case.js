// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  // var str2 = "let the force flow through you";
  // " letTheForceFlowThroughYou";
  console.log(str)

  let camelCase = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      camelCase += str[i + 1].toUpperCase();
      i = i + 1;
    } else if (i === 0) {
      camelCase += str[i].toLowerCase();
    } else {
      camelCase += str[i]
    }
  }

  console.log(camelCase);
  return camelCase;

};

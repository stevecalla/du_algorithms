const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  //divide 20 by element to get the value
  //if array includes the value then true
  //else false

  const calc20byEl = arr.map(element => 20 / element);

  for (let i = 0; i < calc20byEl.length; i++) {
    if (arr.includes(calc20byEl[i])) {
      return true;
    }
  }

  return false
};

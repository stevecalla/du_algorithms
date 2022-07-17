// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  console.log(str);
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  count = 0;

  // section:option #1
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i].toLowerCase() === "a" ||
  //       str[i].toLowerCase() === "e"  ||
  //       str[i].toLowerCase() === "i"  ||
  //       str[i].toLowerCase() === "o"  ||
  //       str[i].toLowerCase() === "u" ) {
  //         count++
  //       }
  // }

  //section:option #2
  // str.forEach(number =>
  //   number.toLowerCase() === "a" ||
  //   number.toLowerCase() === "e"  ||
  //   number.toLowerCase() === "i"  ||
  //   number.toLowerCase() === "o"  ||
  //   number.toLowerCase() === "u" ? count++ : count
  // )

  //section:option #3
  str.forEach(number => {
    // console.log(number);
    vowels.forEach(vowel => {
      // console.log(vowel)
      number.toLowerCase() === vowel ? count++: count;
    })
  })

  // console.log(str, count)
  return count;
};

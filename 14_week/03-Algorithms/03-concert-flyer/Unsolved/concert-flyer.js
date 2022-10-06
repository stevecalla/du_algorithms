// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  // return magazine.includes(flyer);

  console.log(magazine.split(' '));
  console.log(flyer.split(' '));

  const test = [];


  console.log(magazine.split(' ').length, flyer.split(' ').length, );

  for (let i = 0; i < magazine.split(' ').length; i++) {

    for (let j = 0; j < flyer.split(' ').length; j++) {

      console.log(magazine.split(' ')[i], flyer.split(' ')[j],magazine.split(' ')[i] === flyer.split(' ')[j]);
      
      if (magazine.split(' ')[i] === flyer.split(' ')[j]) {
        test.push(magazine.split(' ')[i])
        // return true;
      }

    }
  }

  return test.length === flyer.split(' ').length;
  // console.log('yes')
  // return false;
};

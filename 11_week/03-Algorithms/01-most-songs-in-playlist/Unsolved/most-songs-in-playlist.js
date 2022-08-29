// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // let allElements = arr.map((element) => element);
  // let sum = arr.reduce((acc, cur) => acc + cur, 0);

  console.log(arr);

  arr.sort();
  let count = 0;

  arr.reduce((acc, cur) => {
    if (acc + cur < 60) {
      sum = acc + cur;
      count = count + 1;
    }
    // console.log(acc, cur, sum)
    return sum
  }, 0)

  console.log(arr)
  console.log('-----------------', count)
  return count;
};

mostSongsInPlaylist();

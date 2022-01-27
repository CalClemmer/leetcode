// this works but it's slow
var findLongestChain = function (pairs) {
  let count = 0;
  // sort by second element in pair
  pairs.sort((a, b) => a[1] - b[1]);
  let curr = -100000;

  for (let i = 0; i < pairs.length; i++) {
    if (curr < pairs[i][0]) {
      curr = pairs[i][1];
      count++;
    }
  }
  return count;
};

// [[1,2] [3, 8] [3, 6] [4, 5] [6, 7]]
// want to find lowest second number that I can use
// thought: Order all pairs by second number
//
test = [
  [9, 10],
  [-9, 9],
  [-6, 1],
  [-4, 1],
  [8, 10],
  [7, 10],
  [9, 10],
  [2, 10],
];
console.log(findLongestChain(test));

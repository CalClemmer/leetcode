var maxChunksToSorted = function (arr) {
  let ans = 0;
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
    if (highest === i) {
      ans++;
    }
  }
  return ans;
};

// everytime the highest we've seen equals i
arr = [4, 3, 2, 1, 0];

console.log(maxChunksToSorted(arr));

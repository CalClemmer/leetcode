var majorityElement = function (nums) {
  let count = {};
  let limit = nums.length / 3;

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }

  let ans = Object.keys(count)
    .map(Number)
    .filter((v) => count[v] > limit);

  return ans;
};

// [2, 3, 4, 5, 6, 1, 1, 1, 1, 1]
// can only be at most two answers

let nums = [2, 2, 2, 2, 3, 1, 1, 1, 1];
console.log(majorityElement(nums));

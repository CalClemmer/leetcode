// this works and is memory and time efficient

var frequencySort = function (nums) {
  // function to get frequency of each num
  const getFrequency = (array) => {
    const map = {};
    array.forEach((item) => {
      if (map[item]) {
        map[item]++;
      } else {
        map[item] = 1;
      }
    });
    return map;
  };

  const frequency = getFrequency(nums);

  //sorts array in place, first by frequency
  //then by value
  nums.sort(function (a, b) {
    if (frequency[a] < frequency[b]) {
      return -1;
    } else if (frequency[a] > frequency[b]) {
      return 1;
    }
    // handles case where same frequency
    else {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return nums;
};

nums = [2, 3, 1, 3, 2];

console.log(frequencySort(nums));

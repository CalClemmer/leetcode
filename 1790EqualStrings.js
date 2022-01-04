var areAlmostEqual = function (s1, s2) {
  let count = 0;
  let idx = [];

  // first thought
  // check if strings differ in two places
  // if so, check if switching fixes them
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
      idx.push([i]);
    }
  }
  if (count === 0) {
    return true;
  } else if (count === 2) {
    if (s1[idx[0]] === s2[idx[1]] && s1[idx[1]] === s2[idx[0]]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("dog", "cat")); // false
console.log(areAlmostEqual("banb", "kanb")); // false
console.log(areAlmostEqual("bnak", "kanb")); // false
console.log(areAlmostEqual("cat", "atc")); // false
console.log(areAlmostEqual("same", "same")); // true

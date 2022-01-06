var countPoints = function (rings) {
  let ans = 0;
  // create array with 10 [0,0,0]
  // have to be careful so that you actually create distinct arrays
  // was initially pointing all at the same array
  let ringCheck = Array(10)
    .fill(0)
    .map((x) => Array(3).fill(false));

  let ringArray = rings.match(/.{1,2}/g);
  for (let i = 0; i < ringArray.length; i++) {
    let rodNum = +[ringArray[i][1]];
    let color;
    switch (ringArray[i][0]) {
      case "R":
        color = 0;
        break;
      case "B":
        color = 1;
        break;
      case "G":
        color = 2;
        break;
    }
    ringCheck[rodNum][color] = true;
  }
  ringCheck.forEach(function (e) {
    if (e.every(Boolean)) {
      ans++;
    }
  });
  return ans;
};

// var str = "abcdefghijkl";
// console.log(str.match(/.{1,2}/g));

let rings = "B0B6G0R6R0R6G9";

console.log(countPoints(rings));

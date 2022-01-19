var minSteps = function (n) {
  let factorSum = 0;
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factorSum += divisor;
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factorSum;
};

console.log(minSteps(8));

// is this just the sum of all prime factors?
// if it's prime, n = n
/*
1:1 
2:2
3:3
4:4
5:5
6:5
7:7
8:5
9:6
10:7
11:11
12:7
*/

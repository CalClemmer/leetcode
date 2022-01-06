var findCircleNum = function (isConnected) {
  // thought one: look for lowest number roots
  // thought two: have buckets for each city, and have all
  // connected cities in the same bucket
  // then count the number of buckets
  const len = isConnected.length;

  const buckets = new Array(len * len).fill.map((x) => Array(len).fill(false));

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (isConnected[i][j] === 1) {
        buckets[i].push(j);
      }
    }
  }
  console.log(buckets);
};

isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]; // 3
isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 1, 1],
]; // 1
isConnected2 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]; // 2

findCircleNum(isConnected);

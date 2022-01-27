var minFallingPathSum = function (matrix) {
  let min;
  // handle 1x1 edge case
  if (matrix.length > 1) {
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j > 0 && j < matrix[i].length - 1) {
          min = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j + 1]);
        } else if (j === 0) {
          min = matrix[i - 1][j + 1];
        } else {
          min = matrix[i - 1][j - 1];
        }
        matrix[i][j] += min;
      }
    }
  }
  console.log(matrix);
  return Math.min(...matrix[matrix.length - 1]);
};

// Minimum path to get to each element is determined by element above it
// Loop through array line by line, picking the lower of the two above elements to add

matrix = [
  [-73, 61, 43, -48, -36],
  [3, 30, 27, 57, 10],
  [96, -76, 84, 59, -15],
  [5, -49, 76, 31, -7],
  [97, 91, 61, -46, 67],
];

console.log(minFallingPathSum(matrix));

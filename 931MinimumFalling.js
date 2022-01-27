var minFallingPathSum = function (matrix) {
  let min;
  // handle 1x1 edge case
  if (matrix.length > 1) {
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j > 0 && j < matrix[i].length - 1) {
          min = Math.min(
            matrix[i - 1][j - 1],
            matrix[i - 1][j],
            matrix[i - 1][j + 1]
          );
        } else if (j === 0) {
          min = Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]);
        } else {
          min = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j]);
        }
        matrix[i][j] += min;
      }
    }
  }
  return Math.min(...matrix[matrix.length - 1]);
};

// Minimum path to get to each element is determined by element above it
// Loop through array line by line, picking the lower of the two above elements to add

matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];

console.log(minFallingPathSum(matrix));

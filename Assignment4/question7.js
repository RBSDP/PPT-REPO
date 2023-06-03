var maxCount = function(m, n, ops) {
    let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  
  for (let i = 0; i < ops.length; i++) {
    let [a, b] = ops[i];
    for (let j = 0; j < a; j++) {
      for (let k = 0; k < b; k++) {
        matrix[j][k]++;
      }
    }
  }

  
  let maxValue = Math.max(...matrix.flat());

  
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === maxValue) {
        count++;
      }
    }
  }

  
  return count;
}
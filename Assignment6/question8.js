
var multiply = function(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
   
    const result = Array.from({ length: m }, () => Array(n).fill(0));
  
  
    const transposedMat2 = transpose(mat2);
  
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let p = 0; p < k; p++) {
          result[i][j] += mat1[i][p] * transposedMat2[j][p];
        }
      }
    }
  
    return result;
  };
  
  
  function transpose(matrix) {
    const transposed = [];
  
    for (let j = 0; j < matrix[0].length; j++) {
      const row = [];
  
      for (let i = 0; i < matrix.length; i++) {
        row.push(matrix[i][j]);
      }
  
      transposed.push(row);
    }
  
    return transposed;
  }
  

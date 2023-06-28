
var maxSubarraySumCircular = function(A) {
 
    let maxSum = A[0];
    let currentMax = A[0];
  
    for (let i = 1; i < A.length; i++) {
      currentMax = Math.max(A[i], currentMax + A[i]);
      maxSum = Math.max(maxSum, currentMax);
    }
  

    let minSum = A[0];
    let currentMin = A[0];
    let totalSum = A[0];
  
    for (let i = 1; i < A.length; i++) {
      currentMin = Math.min(A[i], currentMin + A[i]);
      minSum = Math.min(minSum, currentMin);
      totalSum += A[i];
    }
  
  
    if (totalSum === minSum) {
      return maxSum;
    }
  
    return Math.max(maxSum, totalSum - minSum);
  };
  

  
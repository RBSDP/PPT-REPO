var validMountainArray = function(A) {
    const n = A.length;
    let i = 0;
  
    while (i < n - 1 && A[i] < A[i + 1]) {
      i++;
    }
  
  
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    while (i < n - 1 && A[i] > A[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  };
  
  
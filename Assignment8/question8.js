const buddyStrings = function(A, B) {
    if (A.length !== B.length) {
      return false;
    }
  
    if (A === B) {
      const set = new Set(A);
      return set.size < A.length;
    }
  
    const diff = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        diff.push([A[i], B[i]]);
      }
      if (diff.length > 2) {
        return false;
      }
    }
  
    return diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0];
  };
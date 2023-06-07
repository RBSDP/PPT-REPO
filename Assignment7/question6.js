function rotateString(A, B) {
    if (A.length !== B.length) {
      return false;
    }
  
    const concatenated = A + A;
    return concatenated.includes(B);
  }
  

function findNearestSmallerNumber(a) {
    const n = a.length;
    const stack = [];
    const result = new Array(n).fill(-1);
  
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && a[stack[stack.length - 1]] >= a[i]) {
        stack.pop();
      }
  
      if (stack.length > 0) {
        result[i] = a[stack[stack.length - 1]];
      }
  
      stack.push(i);
    }
  
    return result;
  }
  

  
function smallestRangeI(nums, k) {
    const maxNum = Math.max(...nums);
    const minNum = Math.min(...nums);
    
    const diff = maxNum - minNum;
    const minDiff = Math.max(0, diff - 2 * k);
    
    return minDiff;
  }
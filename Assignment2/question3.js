function findLHS(nums) {
    const count = new Map();
    let maxLen = 0;
  
    for (let num of nums) {
      count.set(num, (count.get(num) || 0) + 1);
    }
  
    for (let [num, freq] of count) {
      const complement = num + 1;
      if (count.has(complement)) {
        maxLen = Math.max(maxLen, freq + count.get(complement));
      }
    }
  
    return maxLen;
  }
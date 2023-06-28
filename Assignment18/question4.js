function maximumGap(nums) {
    if (nums.length < 2) {
      return 0;
    }
  
    const n = nums.length;
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);
    let maxGap = 0;
  
    if (maxVal === minVal) {
      return 0;
    }
  
    const bucketSize = Math.ceil((maxVal - minVal) / (n - 1));
    const bucketMin = new Array(n - 1).fill(Number.MAX_SAFE_INTEGER);
    const bucketMax = new Array(n - 1).fill(Number.MIN_SAFE_INTEGER);
  
    for (let i = 0; i < n; i++) {
      const num = nums[i];
      if (num === minVal || num === maxVal) {
        continue;
      }
  
      const index = Math.floor((num - minVal) / bucketSize);
      bucketMin[index] = Math.min(bucketMin[index], num);
      bucketMax[index] = Math.max(bucketMax[index], num);
    }
  
    let prevMax = minVal;
    for (let i = 0; i < n - 1; i++) {
      if (bucketMin[i] === Number.MAX_SAFE_INTEGER && bucketMax[i] === Number.MIN_SAFE_INTEGER) {
        continue;
      }
      maxGap = Math.max(maxGap, bucketMin[i] - prevMax);
      prevMax = bucketMax[i];
    }
  
    maxGap = Math.max(maxGap, maxVal - prevMax);
    return maxGap;
  }
  
 
  
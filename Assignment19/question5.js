function rearrangeArray(nums) {
    const n = nums.length;
    let positiveIndex = 0;
    let negativeIndex = 1;
  
    while (positiveIndex < n && negativeIndex < n) {
      while (positiveIndex < n && nums[positiveIndex] > 0) {
        positiveIndex += 2;
      }
  
      while (negativeIndex < n && nums[negativeIndex] < 0) {
        negativeIndex += 2;
      }
  
      if (positiveIndex < n && negativeIndex < n) {
        [nums[positiveIndex], nums[negativeIndex]] = [nums[negativeIndex], nums[positiveIndex]];
      }
    }
  
    return nums;
  }
  

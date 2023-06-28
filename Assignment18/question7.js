function lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;
  
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
          maxLength = Math.max(maxLength, dp[i]);
        }
      }
    }
  
    return maxLength;
  }
  

  
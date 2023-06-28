function find132pattern(nums) {
    const n = nums.length;
    const stack = [];
    let s3 = -Infinity;
  
    for (let i = n - 1; i >= 0; i--) {
      if (nums[i] < s3) {
        return true;
      }
  
      while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
        s3 = stack.pop();
      }
  
      stack.push(nums[i]);
    }
  
    return false;
  }
  
 
  
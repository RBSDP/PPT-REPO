function searchRange(nums, target) {
    const result = [-1, -1];
    let left = 0;
    let right = nums.length - 1;
  
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result[0] = mid;
        right = mid - 1; 
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
  
    left = 0;
    right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result[1] = mid;
        left = mid + 1; 
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
function sortColors(nums) {
    let left = 0;
    let right = nums.length - 1;
    let curr = 0;
  
    while (curr <= right) {
      if (nums[curr] === 0) {
      
        [nums[left], nums[curr]] = [nums[curr], nums[left]];
        left++;
        curr++;
      } else if (nums[curr] === 2) {
      
        [nums[curr], nums[right]] = [nums[right], nums[curr]];
        right--;
      } else {
       
        curr++;
      }
    }
  }
  

  
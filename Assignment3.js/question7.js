function summaryRanges(nums) {
    const result = [];
    
    let start = nums[0];
    let end = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] === 1) {
        end = nums[i]; 
      } else {
        result.push(getRange(start, end)); 
        start = nums[i]; 
        end = nums[i];
      }
    }
    
    result.push(getRange(start, end)); 
    
    return result;
  }
  
  function getRange(start, end) {
    return start === end ? start.toString() : `${start}->${end}`;
  }
  
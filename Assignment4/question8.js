function shuffle(nums, n) {
    const shuffledArray = [];
  
    for (let i = 0; i < n; i++) {
      shuffledArray.push(nums[i]);
      shuffledArray.push(nums[i + n]);
    }
  
    return shuffledArray;
  }
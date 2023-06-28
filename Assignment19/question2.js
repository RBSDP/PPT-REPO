function countSmaller(nums) {
    const result = new Array(nums.length).fill(0);
    const indexedNums = nums.map((num, index) => ({ num, index }));
  
    mergeSort(indexedNums, 0, indexedNums.length - 1, result);
  
    return result;
  }
  
  function mergeSort(nums, start, end, result) {
    if (start >= end) {
      return;
    }
  
    const mid = Math.floor((start + end) / 2);
    mergeSort(nums, start, mid, result);
    mergeSort(nums, mid + 1, end, result);
    merge(nums, start, mid, end, result);
  }
  
  function merge(nums, start, mid, end, result) {
    const merged = [];
    let count = 0;
    let leftIndex = start;
    let rightIndex = mid + 1;
  
    while (leftIndex <= mid && rightIndex <= end) {
      if (nums[leftIndex].num > nums[rightIndex].num) {
        merged.push(nums[rightIndex]);
        count++;
        rightIndex++;
      } else {
        result[nums[leftIndex].index] += count;
        merged.push(nums[leftIndex]);
        leftIndex++;
      }
    }
  
    while (leftIndex <= mid) {
      result[nums[leftIndex].index] += count;
      merged.push(nums[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex <= end) {
      merged.push(nums[rightIndex]);
      rightIndex++;
    }
  
    for (let i = start; i <= end; i++) {
      nums[i] = merged[i - start];
    }
  }
  
  

var minProductSum = function(nums1, nums2) {
    nums1.sort((a, b) => a - b); 
    nums2.sort((a, b) => b - a); 
  
    let result = 0;
    const n = nums1.length;
  
    for (let i = 0; i < n; i++) {
      result += nums1[i] * nums2[i];
    }
  
    return result;
  };

var twoSum = function(nums, target) {
    let hashMap = {};
  for(let i=0;i<nums.length;i++){
    let num = nums[i]
    let difference = target - num
    if(hashMap.hasOwnProperty(difference)){
      return [hashMap[difference],i]
    }
    hashMap[num] = i
  }
  return []
};
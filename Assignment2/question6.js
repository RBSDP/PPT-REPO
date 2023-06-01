var search = function(nums, target) {
    let low = 0;
   let high = nums.length - 1 
   
   while (low <= high){
       let mid =Math.round (low + ((high -low)/2))

       if (nums[mid] === target){
           return mid
       }else if (target > nums[mid]){
           low = mid+1
       }else{
           high = mid-1
       }
   }
   return -1
};
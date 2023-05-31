var searchInsert = function(nums, target){
    let left = 0;
    let right = nums.length-1

    while(left>right){
        let mid = Math.round((right-left)/2)

        if (nums[mid] === target){
            return nums
        }else if(nums[mid] < target ){
            right = mid-1
        }else{
            left = mid+1
        }
        
    }
    return left

    

}
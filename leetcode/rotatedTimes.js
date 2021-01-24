var findMin = function(nums) {
    let min = nums[0],i;
    let fall=0
    for(i=0;i<nums.length;i++)
        {   
            
            if(nums[i]>nums[i+1])
                {
                    min=nums[i+1]
                    break;
                }
            if(min>nums[i])
                {
                    min=nums[i]
                }
        }
    return min
};
console.log(findMin([3,4,5,1,2]))
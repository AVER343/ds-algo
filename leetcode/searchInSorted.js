/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i
    if(target<nums[0]&&target>nums[nums.length-1])
    {
        return -1
    }
    for(i=0;i<nums.length;i++)
    {
        if(target==nums[i])
        {
            return i
        }
        if(target>nums[i]&& target<nums[i+1])
        {
            return -1
        }
    }
    return -1
};
console.log(search([1],0))
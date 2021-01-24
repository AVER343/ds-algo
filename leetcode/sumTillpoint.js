/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumTillPoint = 0
    return nums.map(e=>{sumTillPoint=sumTillPoint+e; return sumTillPoint+e})
};
console.log(runningSum([1,2,3,4,56]))
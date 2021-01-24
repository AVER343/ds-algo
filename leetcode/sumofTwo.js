
var twoSum = function(nums, target) {
    let i,indexes=[];
    let c=[]
    let lens= nums.length
    for(i=0;i<lens;i++)
    {
        for(j=0;j<lens&&j!=i;j++)
        {
            if(nums[j]==target-nums[i])
            {
                indexes.push(i,j)
                if(indexes.length==2)
                {
                    return indexes
                }
            }
        }
    }
    return indexes
};
console.log(twoSum([2,7,11,15],9))
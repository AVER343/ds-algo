var search = function(nums, target) {
    let changed=0
    let fall = 0
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]>nums[i+1])
        {
            changed++
            fall=i;
            break
        }
    }
    console.log(fall)
   if(changed!=0)
   {
        let firstArray=nums.splice(0,fall+1)
        let secondArray=nums
        if(target<firstArray[0])
        {
            return binarySearch(secondArray,target)==-1?false:true
        }
        return binarySearch(firstArray,target)==-1?false:true
   }
   return binarySearch(nums,target)==-1?false:true
   
};

function binarySearch(arr = [], key) {
    let start=0
    let end = arr.length-1
    let mid 
    mid=midNum(arr,start,end)
    while(start<=end)
    {
        if(arr[mid]==key)
        {
             return mid
        }
        else if(arr[mid]<key)
        {
                 start=mid+1
                 mid=midNum(arr,start,end)
        }
        else{
         end=mid-1
         mid=midNum(arr,start,end)
        }
    }
    return -1
 }
 function midNum(arr,start,end){
    let mid
    if(arr.length%2==0)
    {
         mid=Math.floor((start+end)/2)
    }
    else{
     mid=Math.floor((start+end+1)/2)
    }
    return mid
}
console.log(search([3,1],1))
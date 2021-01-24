var findMedianSortedArrays = function(nums1, nums2) {
   let mergedArray= merging(nums1,nums2)
   let median
   let n =(mergedArray.length)
   if(n%2!=0)
   {
    median= mergedArray[(n+1)/2 -1]
   }
   else {
       median = (mergedArray[(n)/2 -1] +mergedArray[n/2])/2
   }

   return median
};
let merging =(array1,array2)=>{
    let merged=[]
    while(array1.length>0&&array2.length>0)
    {
        if(array1[0]>array2[0])
        {
            merged.push(array2.shift())
        }
        else{
            merged.push(array1.shift())
        }
    }
    merged.push(...array1,...array2)
    return merged
}
console.log(findMedianSortedArrays([1,3],[2,7]))
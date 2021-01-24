import * as a from './a'
const Data=Date.now()
function mergeSort(array:number[])
{   
  const Sorting=(subArray:number[])=>{
   if(subArray.length==1)
     {
        return subArray
     }
   let mid = Math.floor(subArray.length/2)
    let A= mergeSort(subArray.splice(mid))
    let B=mergeSort(subArray)
    let C =Merge(A,B)
   return C
  }
  return Sorting(array)
}

function Merge(array1,array2)
{
   let merged=[]
   let num:number=0
   let index1=0,index2=0
   let len1=array1.length
   let len2=array2.length
while(index1+index2<len1+len2)
{
   if(array2[index2]<array1[index1])
   {
     merged.push(array2[index2])
      index2++
   }
   else if (array2[index2]>=array1[index1])
   {
      merged.push(array1[index1])
      index1++
   }
   else
   {
    for(num=index1;num<len1;num++)
    {
      if(array1[num])
      {
        merged.push(array1[num])
      }
      else{
        break
      }
    }
    for(num=index2;num<len2;num++)
    {
      if(array2[num])
      {
        merged.push(array2[num])
      }
      else{
        break
      }
    }
     return merged
   }
}
return merged
}
// function MajorityElements(array:number[]){
//    let Data =Date.now()
//    console.log(Data)
//    let sortedArray:number[]=mergeSort(array)
//    let index:number=1
//    let elementRecurrence=1
//    let element=sortedArray[0]
//    while(index<sortedArray.length)
//    {
//       if(sortedArray[index]==element)
//       {
//          elementRecurrence++
//          if(elementRecurrence>=Math.floor(sortedArray.length/2)+1)
//          {
//             console.log(Date.now()-Data)
//             return 1
//          }
//       }
//       else
//       {
//          elementRecurrence=1
//          element=sortedArray[index]
//       }
//       index++
//    }
//    console.log(Date.now()-Data)
//    return 0
// }
//  console.log(a.sort((a:number,b:number)=>(a-b)))
console.log(mergeSort(a))
console.log(Date.now()-Data)
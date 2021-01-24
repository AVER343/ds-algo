function findMax(array){
    for(i=0;i<array.length;i++)
    {
        for(j=i;j<array.length;j++)
        {
            if(array[i]>array[j])
            {
                let temp=array[j]
                array[j]=array[i]
                array[i]=temp
            }
        }
    }
    return array
}
console.log(findMax([1,3,5,10 ,15,1,3,4]))
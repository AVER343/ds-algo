export {};
const array:number[] = [1,2,3,4,5,6,7,4]
let size = 3
const arrayCompiler= (array:number[],size:number):number[][]=>{
    let newArray :number[][]=[]

    for(let i=0;i<array.length;i++)
    {
       let j:number=i%size
       let k:number=Math.floor(i/size)
      if(!newArray[k]) {
            newArray[k]=[]
        }
        newArray[k][j]=array[i]
    }
    return newArray
}
console.log(arrayCompiler(array,size))
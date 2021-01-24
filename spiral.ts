export {};
const spiral:number[][]=[]
let result=[]
let counter=1
let size=6
let startRow=0,startCol=0,endCol=size-1,endRow=size-1;
for(let j=0;j<size;j++)
{
    result.push([])
}
while(startCol<=endCol && startRow<=endRow)
{

 for(let i=startCol;i<=endCol;i++)
 {
    result[startRow][i]=counter
    counter++
}
 startRow++
 for(let i=startRow;i<=endRow;i++)
 {
     result[i][endCol]=counter
     counter++
 }
 endCol--
 for(let i=endCol;i>=startCol;i--)
 {
     result[endRow][i]=counter
     counter++
 }
 endRow--
 for(let i=endRow;i>=startRow;i--){
     result[i][startCol]=counter
     counter++
 }
 startCol++
}
console.log(result)
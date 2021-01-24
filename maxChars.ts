export {};
const a:string='maxCharsinthe entire sentence'.toLowerCase()
let array:number[]=[]
for(let i:number=0;i<26;i++)
{
    array[i]=0
}
for(let i:number=0;i<a.length;i++){
    if(a.charCodeAt(i)!=32)
    {
        array[a.charCodeAt(i)-97]++
    }
}
console.log(`MAx iteration are ${String.fromCharCode(4+97)}`)
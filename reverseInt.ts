export {};
let number:number=-142
let sign:number = 1
if(number<0)
{
    sign=-1
}
number =Math.abs(number)
let i:number=0,rev:number=0;
let remainder:number=0
for(i=0;number>0;i++)
{   
    remainder = number%10
    rev=rev*10 + remainder
    number = Math.floor(number/10) ;
    console.log(rev,remainder,number)
}
console.log(sign*rev)
export {};
const palin='1221'
let rev:string=''
for(let i=palin.length-1;i>=0;i--){
    rev=rev.concat(palin[i])
}
if(rev===palin)
{
    console.log('PalindromE!')
}
else{
    console.log('NOT PALINDROME!')
}
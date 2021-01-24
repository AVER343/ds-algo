// by Alexander Nikolskiy

const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [count] = line.toString().split(' ').map(Number);
    process.stdout.write(`${max(count)}`, () => {
        process.exit();
    })
            })

function max(num) {
    let sum=0
    let totalNums=0
    let i=1
    let numbers=[]
    let x=solve(1,1,num)
    let returnState=``
    if(x%1==0)
    {   
        for(i=1;i<=x;i++)
        {
            returnState=returnState.concat(i+' ')
        }
        console.log(x)
        return returnState
    }
    if(x%1>0)
    {   
        x=Math.ceil(x)
        for(i=1;i<x;i++)
        {
           if(i<x-1){ 
               returnState=returnState.concat(i+' ')
            }
           else{    
            returnState=returnState.concat(i+(num-(i*i+i)/2))
           }
        }
        console.log(x-1)
        return returnState
    }
    // while(sum<num)
    //     {
    //         if(sum+i<=num)
    //         {
    //             sum=sum+i
    //             totalNums++
    //             numbers=numbers.concat(i)
    //         }
    //         else
    //         {
    //             break
    //         }
    //         i++
    //     }

    // if(sum==num){
    //   let returnState=``
    //   let i=0
    //   let len=numbers.length
    //   console.log(numbers.length)
    //   for(i=0;i<len;i++)
    //   {
    //     returnState=returnState.concat(numbers[i])
    //     if(i!=numbers.length-1)
    //       {
    //         returnState=returnState.concat(` `)
    //       }
    //   }
    //   return (returnState)
    // }
    // if(sum<num)
    // {
    //   numbers[numbers.length-1]=numbers[numbers.length-1] + num-sum
    //   let returnState=``
    //   let i=0
    //   let len=numbers.length
    //   console.log(numbers.length)
    //   for(i=0;i<len;i++)
    //   {
    //     returnState=returnState.concat(numbers[i])
    //     if(i!=numbers.length-1)
    //       {
    //         returnState=returnState.concat(` `)
    //       }
    //   }
    //   return (returnState)
    // }
}
function solve(a, b, c) {
    c=-2*c
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result
}
module.exports = max;

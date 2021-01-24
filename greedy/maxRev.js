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
    let value
    let b=[],a=[]
    
        rl.once('line',next=>{
            const constants = next.toString().split(' ').map(Number)
            a.push(...constants)
            rl.on('line',(last)=>{
                const v = last.toString().split(' ').map(Number)
                b.push(...v)
                console.log(max(count,a,b))
                process.exit()
            })
        })
});

function max(count,a,b) {
   let newArrayOne= selectSort(a)
   let newArrayTwo=selectSort(b)
 let returningSum=0,i=0

 for(i=0;i<newArrayOne.length;i++)
 {
     returningSum = returningSum + newArrayOne[i]*newArrayTwo[i]
 }
 return returningSum
}
function selectSort(array){
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
module.exports = max;

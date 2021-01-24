// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);
        console.log(getFibMod(n,m));
        process.exit();
    }
}


function getFibMod(n,m) {
    let b,c
    if(n==m)
    {
    b= calling(n-1)
    c= calling(m)
    }
    else
    {
    b= calling(n)
    c=calling(m)
    }
    console.log(b,c)
}
function calling(n)
{
    let a =BigInt(n)
    const firstSixty=BigInt(280)
    let remain=a%BigInt(60)
    let lastNumber=1,secondLastnumber=0 ,nextNumber,sum=0
    for(i=1;i<=remain;i++)
    { 
        sum=sum+lastNumber
        nextNumber=lastNumber+secondLastnumber
        secondLastnumber=lastNumber
        lastNumber=nextNumber
    }
    a=a/BigInt(60)
    let result=(a*firstSixty+BigInt(sum)).toString()
    return(result[result.length-1])
}
module.exports = getFibMod;

// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(a) {
  let  n=a%60
    let lastNumber=1,secondLastnumber=0 ,nextNumber
    if(n<2)return (n)
    for(i=2;i<=n;i++)
    {
        nextNumber=lastNumber+secondLastnumber
        secondLastnumber=lastNumber
        lastNumber=nextNumber
    }
   let resString = lastNumber.toString()
    return resString[resString.length-1]
}
module.exports = fib;

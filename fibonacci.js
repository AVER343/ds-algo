
// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line,10)))
    process.exit();
}

function fib(n) {
    let lastNumber=1,secondLastnumber=0 ,nextNumber
    if(n<2)return (n)
    for(i=2;i<=n;i++)
    {
        nextNumber=lastNumber+secondLastnumber
        secondLastnumber=lastNumber
        lastNumber=nextNumber
    }
    return lastNumber
}

module.exports = fib;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(change(parseInt(line,10)));
    process.exit();
}

function change(n) {
    let remaining = n%12
    let numberOfCoins = parseInt((n/12))*3
    for(i=0;i<remaining;i++)
    {
        
    }
}

module.exports = change;

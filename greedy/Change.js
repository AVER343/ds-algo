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
        console.log(change(n));
        process.exit();
    }
}


function change(n) {
    let numberOfCoins=0
    numberOfCoins=parseInt(n/10)
    n=n%10
    numberOfCoins=numberOfCoins+parseInt(n/5)
    n=n%5
    numberOfCoins=numberOfCoins+n/1
    n=0
    return numberOfCoins
}

module.exports = change;

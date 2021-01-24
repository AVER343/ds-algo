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
        console.log(getFibMod(n, m));
        process.exit();
    }
}


function getFibMod(n) {
    let totalSum= 0
    
}

module.exports = getFibMod;

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
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(gcd(a, b));
        process.exit();
    }
}

function gcd(a, b) {
    let lcm;
    let a_prime=a,b_prime=b
    while(a_prime>0||b_prime>0)
    {
        a_prime=a_prime%b_prime
        if(a_prime==0)
        {
            lcm=(a*b)/b_prime
            return lcm
        }
        b_prime=b_prime%a_prime
        if(b_prime==0)
        {
            lcm=(a*b)/a_prime
            return lcm
        }
    }
}
module.exports = gcd;

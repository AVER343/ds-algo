// by Alexander Nikolskiy

const readline = require('readline');
const { parse } = require('path');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const numbers= parseInt(line)

    rl.on('line', line => {
        let array = line.toString().split(' ')
            array=array.map(elem=>parseInt(elem))
            console.log(max(numbers,array));
            process.exit();
        
    });
});
function max(numbers ,array) {
    let maxSalary ='',i=0
    for(i=numbers-1;i>=0;i--)
    {
        maxSalary =  maxSalary.concat(maxArray[i])
    }
    return maxSalary
}
module.exports = max;

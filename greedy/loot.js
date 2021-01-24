// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    let maxEfficient=values[0]/weights[0]
    let index=0
    let value = 0
    let weightInBag=0
    let countInBag=0
    let i,j
    for(i=0;capacity>weightInBag&&count>=countInBag;i++)
    {
       maxEfficient=0
        for(j=0;j<values.length;j++)
        {
            if(maxEfficient<values[j]/weights[j])
            {
                 maxEfficient=values[j]/weights[j]
                 index=j
            }
        }
        if(weights[index]+weightInBag>capacity)
        {
            let remaining = capacity-weightInBag
            value = ((values[index]/weights[index])*remaining)+value
            weightInBag=capacity
            countInBag++
            return value
        }
        weightInBag = weightInBag + weights[index]
        value =  value+values[index]
        weights.splice(index,1)
        values.splice(index,1)
        countInBag++
    }
    return value
}

module.exports = max;

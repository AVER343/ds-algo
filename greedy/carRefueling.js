// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [distance] = line.toString().split(' ').map(Number);
    let value
    let count = 0;
    let stops=[]
    rl.once('line', line => {
       capacity=Number(line)
        rl.once('line',next=>{
            count=Number(next)
            rl.on('line',(last)=>{
                const v = last.toString().split(' ').map(Number)
                stops.push(...v)
                console.log(max(distance,capacity,count,stops))
                process.exit()
            })
        })
    });
});

function max(distance, capacity, value, stops) {
    let position=0
    let j
    let i=0
    stops=stops.concat(distance)
    let temp=stops[0]
    let StopsRequired=0
    let StopsThatAreRequired=[]
    let len = stops.length
    while(i<len)
    {
        if(stops[i+1]&&stops[i+1]-stops[i]>capacity)
        {
            return -1
        }
        if(stops[i+1]-position>capacity&&stops[i]-position<=capacity)
        {
            position=stops[i]
            StopsRequired++
        }
        if(stops[i+1]-position>capacity&&stops[i]-position>capacity)
        {
            return -1
        }
        if(position+capacity>=distance)
        {
            return StopsRequired
        }
        i++
    }
    return StopsRequired
}
module.exports = max;

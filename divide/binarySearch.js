// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    const arr = line.toString().split(' ').splice(1).map(Number);

    rl.once('line', line => {
        const keys = line.toString().split(' ').splice(1).map(Number);
        const result = [];
        const maxLength = 50000;
        process.stdout.write(`${numberPresent(arr,keys)}`, () => {
            process.exit();
        })
    })
});

function numberPresent(arr=[], key=[]) {
   let returnString=``
   let indexes=[]
   let i=0,len=key.length
   for(i=0;i<len;i++){
       indexes.push(binarySearch(arr,key[i]))
   }
   indexes.forEach(elem=>{if(elem!=-1){totalNumbersPresent++} return elem})
   returnString = returnString.concat(...indexes.map(elem=>elem.toString()+' '))
   return returnString
}
function binarySearch(arr = [], key) {
   let start=0
   let end = arr.length-1
   let mid 
   mid=midNum(arr,start,end)
   while(start<=end)
   {
       if(arr[mid]==key)
       {
            return mid
       }
       else if(arr[mid]<key)
       {
                start=mid+1
                mid=midNum(arr,start,end)
       }
       else{
        end=mid-1
        mid=midNum(arr,start,end)
       }
   }
   return -1
}
const midNum=(arr,start,end)=>{
    let mid
    if(arr.length%2==0)
    {
         mid=Math.floor((start+end)/2)
    }
    else{
     mid=Math.floor((start+end+1)/2)
    }
    return mid
}
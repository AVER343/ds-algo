const readline = require('readline');
const { parse } = require('path');
rl = readline.createInterface({
    input : process.stdin,
	output : process.stdout ,
	terminal: false
 });

function question(Question) {
    return new Promise(resolve => rl.question(Question, answ => resolve(answ)))
}

async function askQuestions(){
    let maxProduct=0
    let array=[]
	var answer = await question("")
    array.length=parseInt(answer)

    var answer2 = await question("")
    array = answer2.split(' ')
    const newArray=array.map(elem=>parseInt(elem))
   let a= maxNumbers(newArray)
   console.log(parseInt(a[0])*parseInt(a[1]))
}
askQuestions()
const maxNumbers=(array)=>{

    let maxArray=[]
    if(array[0]>array[1])
    {
        maxArray.push(array[0],array[1])
    }
    else{
        maxArray.push(array[1],array[0])
    }
    for(let i=2;i<array.length;i++)
    {
        if(array[i]>maxArray[0])
        {
            maxArray[1]=maxArray[0]
            maxArray[0]=array[i]
        }
        else if(array[i]<maxArray[0])
        {
            if(array[i]>maxArray[1])
            {
                maxArray[1]=array[i]
            }
        }
    }
    return maxArray
}

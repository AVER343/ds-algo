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
	let sum=0
	var answer = await question("")
	let array = answer.split(' ')
	const newArray=array.map(elem=>parseInt(elem))
	newArray.forEach(elem=>{sum=sum+elem})
	console.log(sum)
}
askQuestions()
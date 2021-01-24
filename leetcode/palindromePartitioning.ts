/**
 * @param {string} s
 * @return {string[][]}
 */
// var partition = function(s) {
//     let givenString = s.split('')
//     let allPalindrome=[]
//     let startingStringIndex=0
//     let endingStringIndex=0
//     let len = s.length
//    let lengthToCheck
//     for(startingStringIndex=0,lengthToCheck=0;startingStringIndex<len;startingStringIndex++)
//     {
//         for(endingStringIndex=startingStringIndex;endingStringIndex<len;endingStringIndex++)
//         {
//             if(isPalindrome(s.substring(startingStringIndex,endingStringIndex+1)))
//             {
//                 allPalindrome.push(s.substring(startingStringIndex,endingStringIndex+1));
//             }
//         }
//     }
//     return allPalindrome
// };
function isPalindrome(string:string){
    let previousStringArray= string.split('')
    let equality = true,temp
    let len  = previousStringArray.length
    let newStringArray = previousStringArray.map((e,i)=>previousStringArray[len-(i+1)])
    for(temp=0;temp<len;temp++)
    {
        if(previousStringArray[temp]!=newStringArray[temp])
        {
            equality=false
        }
    }
    return equality
}
var partition = function(s:string) {
    let newString = s.split('');
    let palindromeLength=0,i,j,k
    let allPalindrome=[]
    for(k=0;k<s.length;k++)
    {
        for(i=0;i<s.length;i++)
        {
           if(isPalindrome(s.substring(i,i+palindromeLength+1)))
           {
               allPalindrome.push(s.substring(i,i+palindromeLength+1))
           }
        }
        palindromeLength++
    }
    return allPalindrome
}
console.log(partition('aaa'))

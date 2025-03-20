
//using string reversal approach
function palindromeCheck(num){
    const strNum = num.toString()
    const result = strNum.split('').reverse().join('')
    if(strNum === result){
        return true
    }
    return false
}

//using array every() method

function palindromeCheckUsingEvery(num){
    let numStr = num.toString()
    let numArr = numStr.split('')
    return numArr.every((num,index)=>num==numArr[(numArr.length-1)-index])
}

//using XOR operator

function palindromeCheckUsingXOR(num){
    let numStr = num.toString()
    let length = numStr.length
    let result = 0
    for(let i=0;i<Math.floor(length/2);i++){
        result ^= numStr.charCodeAt(i) ^ numStr.charCodeAt((length-1)-i)
    }

    return result === 0
}

//using recursion

function palindromeCheckUsingRecursion(num){
    function recursiveCall(num,index){
        if(index >= numStr.length/2){
            return true
        }
        if(numStr[index] !== numStr[numStr.length-1-index]){
            return false
        }
        return recursiveCall(num,index+1)
    }
    let numStr = num.toString()
    return recursiveCall(numStr,0)
}


const num = 12321
// console.log(palindromeCheck(num))
// console.log(palindromeCheckUsingEvery(num))
// console.log(palindromeCheckUsingXOR(num))
console.log(palindromeCheckUsingRecursion(num))

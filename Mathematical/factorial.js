//using iteration
function factorialUsingLoop(num){
    if(num<0){
        return undefined
    }
    let fact = 1
    for(let i=num;i>=1;i--){
        fact*=i
    }
    return fact
}

//using recursion
function factorialUsingRecurssion(num){
    function recursiveCall(num){
        if(num<0){
            return undefined
        }
        if(num<=1){
            return 1
        }
        return num * recursiveCall(num-1)
    }
    return recursiveCall(num)
}

//using while loop

function factorialUsingWhileLoop(num){
    if(num<0){
        return undefined
    }
    let i=1
    let result = 1
    while(i<=num){
        result *= i
        i++
    }
    return result
}

console.log(factorialUsingLoop(3))
console.log(factorialUsingRecurssion(3))
console.log(factorialUsingWhileLoop(3))
//JavaScript Program to Print N to 1 using Recursion

function printUsingRecursionNtoOne(n){
    if(n<1){
        return
    }
    console.log(n)
    return printUsingRecursionNtoOne(n-1)
}

printUsingRecursionNtoOne(5)

//JavaScript Program to Print 1 to N using Recursion

function printUsingRecursionOneToN(n,index){
    if(index>n){
        return
    }
    console.log(index)
    return printUsingRecursionOneToN(n,index+1)
}

printUsingRecursionOneToN(5,1)

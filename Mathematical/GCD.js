//using for loop
function GCDusingForLoop(num1,num2){
    let largest = Math.max(num1,num2)
    let divisors = []
    for(let i=1;i<=largest;i++){
        if(num1%i===0 && num2%i==0){
            divisors.push(i)
        }
    }
    console.log(divisors)
    return Math.max(...divisors)
}

//using recursion


console.log(GCDusingForLoop(20,28))
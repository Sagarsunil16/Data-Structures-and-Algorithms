var trailingZeroes = function(n) {
    const fact = factorial(n)
     let str = fact.toString()
     let count = 0
     while(str[str.length-1]==0){
         count++
     }
     return count

 };
 
 const factorial = (n)=>{
      if(n<0){
         return undefined
     }
     if(n<2){
         return 1
     }
     return n * trailingZeroes(n-1)
 }

 console.log(trailingZeroes(5))

let arr = [1,2,3,4,5,6,7,8]
let left = 0
let right = arr.length -1
console.log(arr,"Initial Array")
while(left<right){
 [arr[left],arr[right]] = [arr[right],arr[left]]
 left++
 right--
}

console.log(arr,"Reversed Array")
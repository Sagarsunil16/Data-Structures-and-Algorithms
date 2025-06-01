// Task: Write a function filterDuplicates that takes an array of numbers and returns a new array with duplicates removed.

// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function filterDuplicateArray(arr){
    try {
        let set = new Set(arr)
        console.log([...set])
    } catch (error) {
        console.log(error)
    }
}


let arr = [1, 2, 2, 3, 4, 4, 5]
filterDuplicateArray(arr)
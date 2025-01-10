function removeDuplicates(array) {
    let uniqueSet = new Set(array); 
    return Array.from(uniqueSet); 
}


let inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];


let uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); 
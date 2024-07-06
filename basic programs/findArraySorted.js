function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 5, 1, 7, 3];
console.log("Is arr1 sorted?", isSorted(arr1));
console.log("Is arr2 sorted?", isSorted(arr2)); 

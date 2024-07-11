function isSorted(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 5, 5, 7]));
console.log(isSorted([1, 2, 5, 3, 7])); 

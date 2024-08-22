var leftRightDifference = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < n; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        result[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }

    return result;
}
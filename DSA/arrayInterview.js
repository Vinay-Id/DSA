// 1. Find the missing number in a given integer of 1 to 100
// const nums = [];

// for (let i = 0; i <= 100; i++){
//     if (i != 50){
//         nums.push(i);
//     }
    
// }

// var total = 0;

// for (let i = 0; i < nums.length; i++){
//     total += nums[i];
// }

// console.log(5050 - total);

// 2. Find the max and min of an array of integers

const nums = [4,10,3,11,2,15,3]
var maxVal = nums[0];

for (let i = 0; i < nums.length; i++){
	if (maxVal < nums[i]){
		maxVal = nums[i];
	}
}
console.log(maxVal);
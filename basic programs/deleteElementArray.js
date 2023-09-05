const arr = [10, 20, 30, 40, 50];
const position = 2;
// for (let i = position; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr.length = arr.length - 1;
// console.log(arr);

arr.splice(position,1)
console.log(arr);
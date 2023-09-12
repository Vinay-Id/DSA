let arr = [];
for (let index = 1; index < 101; index++) {
  if (index == 21) {
    continue;
  } else {
    arr.push(index);
  }
}
console.log(arr);

let num = arr.reduce((acc, num) => acc + num, 0);
console.log(num);
console.log(`missing number is ${5050 - num}`);

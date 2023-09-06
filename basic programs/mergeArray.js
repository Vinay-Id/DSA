//for loop

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
  arr3[arr3.length + i] = arr2[i];
}
// console.log(arr3);

const arr4 = [...arr1, ...arr2];
// console.log(arr4);

//while loop merge
const data1 = [1, 3, 5, 7];
const data2 = [2, 4, 6];
const data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    data3[d3] = data1[d1];
    d1++;
  } else {
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
}
while (d1 < data1.length) {
  data3[d3] = data1[d1];
  d1++;
  d3++;
}
console.log(data3);

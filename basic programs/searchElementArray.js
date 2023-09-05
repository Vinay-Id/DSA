const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 60) {
    console.log(`element found on ${i}`);
    break;
  }
  console.log(arr[i]);
}

console.log(arr.indexOf(90));
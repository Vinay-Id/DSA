function factorial(num) {
  let temp;
  if (num == 0) {
    return 1;
  } else {
    temp = num * factorial(num - 1);
    return temp;
  }
}
console.log(factorial(4));

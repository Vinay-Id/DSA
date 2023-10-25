function sumToN(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += n;
  }

  return n;
}
function sumToNRec(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToNRec(n - 1);
  }
}

//example
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(3));

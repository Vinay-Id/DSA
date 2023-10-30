var reverse = function (x) {
  let num = `${x}`;
  let revArr = [];
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == "-") {
      revArr.unshift("-");
    } else {
      revArr.push(num[i]);
    }
  }
  let arr = revArr.join("");
  if (arr < -Math.pow(2, 31) || arr > Math.pow(2, 31) - 1) {
    return 0;
  }
  return arr;
};

// var reverse = function (x) {
//   let reversed = 0;
//   while (x !== 0) {
//     const digit = x % 10;
//     x = Math.trunc(x / 10);
//     reversed = reversed * 10 + digit;
//   }
//   if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
//     return 0; 
//   }
//   return reversed;
// };

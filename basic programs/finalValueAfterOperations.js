// There is a programming language with only four operations and one variable X:
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

var finalValueAfterOperations = function (operations) {
  let X = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("++")) {
      X++;
    } else {
      X--;
    }
  }

  return X;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));

// var finalValueAfterOperations = function (operations) {
//   let X = 0;
//   for (let i = 0; i < operations.length; i++) {
//     if (operations[i] == "X++") {
//       X++;
//     } else if (operations[i] == "++X") {
//       ++X;
//     } else if (operations[i] == "X--") {
//       X--;
//     } else {
//       --X;
//     }
//   }
//   return X;
// };

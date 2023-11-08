// Example 1:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// var interpret = function(command) {
//     return command.replaceAll("()","o").replaceAll("(al)","al");

//     };

var interpret = function (command) {
  let str = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] == "G") {
      str = str + "G";
    } else if (command[i] == "(" && command[i + 1] == ")") {
      str += "o";
    } else if (
      command[i] == "(" &&
      command[i + 1] == "a" &&
      command[i + 2] == "l" &&
      command[i + 3] == ")"
    ) {
      str += "al";
    }
  }
  return str;
};

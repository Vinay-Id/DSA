var isPalindrome = function (s) {
    const regex = /[^a-zA-Z0-9 ]/g;
    const cleanStr = s.replace(regex, "");
    let newstr=cleanStr.toLowerCase().split(" ").join("");
    return (
      newstr.split("").reverse().join("") ==newstr
    );
  };

console.log(isPalindrome("A man, a plan, a canal: Panama"));

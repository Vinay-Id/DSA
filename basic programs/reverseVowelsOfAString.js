var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let vowelList = [];
    for (let char of arr) {
        if (vowels.includes(char)) {
            vowelList.push(char);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = vowelList.pop();
        }
    }
    return arr.join('');
};



// var reverseVowels = function (s) {
//   let vowel = "aeiouAEIOU";
//   let revVowel = "";
//   let newStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (vowel.includes(s[i])) {
//       revVowel += s[i];
//       newStr += "*";
//     } else {
//       newStr += s[i];
//     }
//   }
//   let vowLength = revVowel.length - 1;
//   let finalStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (newStr[i] == "*") {
//       finalStr += revVowel[vowLength];
//       vowLength--;
//     } else {
//       finalStr += newStr[i];
//     }
//   }
//   return finalStr;
// };

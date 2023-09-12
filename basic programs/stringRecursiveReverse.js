function arrayReverse(str, len) {
  if (len == str.length) {
    return;
  } else {
    arrayReverse(str, len + 1);
    console.log(str[len]);
  }
}
const arr = ["test", "string"," arr"];
arrayReverse(arr, 0);

function reverse(s, len) {
  if (len == s.length) {
    return;
  }

  reverse(s, len + 1);

  console.log(s[len]);
}

var s = "test string";
reverse(s, 0);

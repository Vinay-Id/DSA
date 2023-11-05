var isSubsequence = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) {
      return false;
    }
  }
  return true;
};
isSubsequence("axc", "ahbgdc");

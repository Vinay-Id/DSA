var maxLengthBetweenEqualCharacters = function (s) {
  const charIndices = {};

  let maxLength = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charIndices.hasOwnProperty(char)) {
      const distance = i - charIndices[char] - 1;
      maxLength = Math.max(maxLength, distance);
    } else {
      charIndices[char] = i;
    }
  }

  return maxLength;
};

// JavaScript String Cheat Sheet

// // 1. Creating Strings
// const str1 = 'Hello, World!'; // Using single quotes
// const str2 = "JavaScript";   // Using double quotes
// const str3 = `ES6`;          // Using template literals

// // 2. String Length
// const length = str1.length;
// console.log(length); // Output: 13

// // 3. Accessing Characters
// const char = str1[0]; // Access the first character
// console.log(char); // Output: 'H'

// // 4. Concatenation
// const fullName = 'John' + ' ' + 'Doe';
// console.log(fullName); // Output: 'John Doe'

// // 5. Template Literals
// const name = 'Alice';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: 'Hello, Alice!'

// // 6. Escaping Special Characters
// const specialStr = 'This is a \'special\' string.';
// console.log(specialStr); // Output: 'This is a 'special' string.'

// // 7. String Methods

// // - Conversion
// const num = 42;
// const numStr = num.toString();
// console.log(numStr); // Output: '42'

// // - Concatenation
// const str4 = 'Hello, '.concat('World!');
// console.log(str4); // Output: 'Hello, World!'

// // - Substring
// const substring = str1.substring(0, 5);
// console.log(substring); // Output: 'Hello'

// // - Substr
// const substr = str1.substr(0, 5);
// console.log(substr); // Output: 'Hello'

// // - Slice
// const sliced = str1.slice(0, 5);
// console.log(sliced); // Output: 'Hello'

// // - Uppercase and Lowercase
// const upperCaseStr = str2.toUpperCase();
// const lowerCaseStr = str2.toLowerCase();
// console.log(upperCaseStr); // Output: 'JAVASCRIPT'
// console.log(lowerCaseStr); // Output: 'javascript'

// // - Searching
// const indexOfWorld = str1.indexOf('World');
// const lastIndexOfl = str1.lastIndexOf('l');
// const includesHello = str1.includes('Hello');
// console.log(indexOfWorld); // Output: 7
// console.log(lastIndexOfl); // Output: 10
// console.log(includesHello); // Output: true

// // - Replacing
// const replaced = str1.replace('World', 'Universe');
// console.log(replaced); // Output: 'Hello, Universe!'

// // - Trimming
// const whitespaceStr = '  Trim me!  ';
// const trimmed = whitespaceStr.trim();
// console.log(trimmed); // Output: 'Trim me!'

// // - Splitting
// const words = str1.split(' ');
// console.log(words); // Output: ['Hello,', 'World!']

// // 8. String Comparison
// const str5 = 'apple';
// const str6 = 'banana';
// const compareResult = str5.localeCompare(str6);
// console.log(compareResult); // Output: -1 (str5 comes before str6)

// // 9. Checking for Empty or Blank Strings
// const isEmpty = str1.length === 0;
// const isBlank = str1.trim().length === 0;
// console.log(isEmpty); // Output: false
// console.log(isBlank); // Output: false

// // 10. Checking for Substring
// const containsSubstring = str1.includes('Hello');
// console.log(containsSubstring); // Output: true

// // 11. String Interpolation
// const age = 25;
// const message = `I am ${age} years old.`;
// console.log(message); // Output: 'I am 25 years old.'

// // 12. Multiline Strings (ES6)
// const multilineStr = `This is
// a multiline
// string.`;
// console.log(multilineStr); // Output: 'This is\na multiline\nstring.'

// // 13. Unicode Characters (Escape Sequences)
// const heart = '\u2764'; // Unicode heart character
// console.log(heart); // Output: '❤'

// // 14. Regular Expressions (Regex)
// const regex = /pattern/g;
// const isMatch = regex.test(str1);
// console.log(isMatch); // Output: false

// // 15. String Padding (ES6)
// const paddedStr = '5'.padStart(4, '0'); // '0005'
// console.log(paddedStr); // Output: '0005'

// // 16. String Repeat (ES6)
// const repeatedStr = 'abc'.repeat(3); // 'abcabcabc'
// console.log(repeatedStr); // Output: 'abcabcabc'

// // 17. String Equality
// const str7 = 'apple';
// const str8 = 'apple';
// const areEqual = str7 === str8;
// console.log(areEqual); // Output: true

// // 18. String to Array
// const strToArray = Array.from(str1);
// console.log(strToArray); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// // 19. String to JSON (Parsing)
// const jsonStr = '{"name":"Alice","age":25}';
// const parsedObj = JSON.parse(jsonStr);
// console.log(parsedObj); // Output: { name: 'Alice', age: 25 }

// // 20. JSON to String (Serialization)
// const objToStr = JSON.stringify({ name: 'Bob', age: 30 });
// console.log(objToStr); // Output: '{"name":"Bob","age":30}'

// // 21. String.fromCharCode
// const charCode = String.fromCharCode(65); // 'A'
// console.log(charCode); // Output: 'A'

// // 22. String.includes (ES6)
// const includesHello = str1.includes('Hello');
// console.log(includesHello); // Output: true

// // 23. String.endsWith (ES6)
// const endsWithWorld = str1.endsWith('World!');
// console.log(endsWithWorld); // Output: true

// // 24. String.startsWith (ES6)
// const startsWithHello = str1.startsWith('Hello');
// console.log(startsWithHello); // Output: true

// // 25. String.match
// const regexMatch = str1.match(/Hello/g);
// console.log(regexMatch); // Output: [ 'Hello' ]

// // 26. String.charCodeAt
// const charCodeAt = str1.charCodeAt(0); // Unicode code for 'H'
// console.log(charCodeAt); // Output: 72

// // 27. String.charAt
// const charAt = str1.charAt(7); // 'W'
// console.log(charAt); // Output: 'W'

// // 28. String.padEnd (ES6)
// const paddedEnd = '5'.padEnd(4, '0'); // '5000'
// console.log(paddedEnd); // Output: '5000'

// // 29. String.normalize (ES6)
// const normalizedStr = 'lémon'.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
// console.log(normalizedStr); // Output: 'lemon'

// // 30. String.lastIndexOf
// const lastIndexOfWorld = str1.lastIndexOf('World');
// console.log(lastIndexOfWorld); // Output: 7

// // 31. String.fromCharCode (ES6)
// const charFromCode = String.fromCodePoint(128516); // '😀'
// console.log(charFromCode); // Output: '😀'

// // 32. String.raw (ES6)
// const path = String.raw`C:\Windows\System32\cmd.exe`;
// console.log(path); // Output: 'C:\Windows\System32\cmd.exe'

// // 33. String.localeCompare
// const comparisonResult = str5.localeCompare(str6);
// console.log(comparisonResult); // Output: -1 (str5 comes before str6)

// // 34. String.prototype.trimStart (ES2019)
// const trimmedStart = '   Trim me!   '.trimStart();
// console.log(trimmedStart); // Output: 'Trim me!   '

// // 35. String.prototype.trimEnd (ES2019)
// const trimmedEnd = '   Trim me!   '.trimEnd();
// console.log(trimmedEnd); // Output: '   Trim me!'

// // 36. String.prototype.matchAll (ES2020)
// const regexMatchAll = /a/g;
// const matches = [...'abcabcabc'.matchAll(regexMatchAll)];
// console.log(matches); // Output: [ ['a', 'a', 'a'] ]

// // 37. String.prototype.replaceAll (ES2021)
// const replacedAll = 'hello world hello'.replaceAll('hello', 'hi');
// console.log(replacedAll); // Output: 'hi world hi'

// // 38. String.prototype.at (ES2021)
// const characterAt = 'abc'.at(1);
// console.log(characterAt); // Output: 'b'

// // 39. String.prototype.startsWith (ES2015)
// const startsWithHelloES2015 = str1.startsWith('Hello');
// console.log(startsWithHelloES2015); // Output: true

// // 40. String.prototype.endsWith (ES2015)
// const endsWithWorldES2015 = str1.endsWith('World!');
// console.log(endsWithWorldES2015); // Output: true

// // 41. String.prototype.includes (ES2015)
// const includesHelloES2015 = str1.includes('Hello');
// console.log(includesHelloES2015); // Output: true

// // 42. String.prototype.repeat (ES2015)
// const repeatedStrES2015 = 'abc'.repeat(3); // 'abcabcabc'
// console.log(repeatedStrES2015);

// // 43. String.prototype.codePointAt (ES2015)
// const codePointAt = '😀'.codePointAt(0); // 128516
// console.log(codePointAt);

// // 44. String.prototype.normalize (ES2015)
// const normalizedStrES2015 = 'lémon'.normalize();
// console.log(normalizedStrES2015);

// // 45. String.prototype.match (ES2015)
// const regexMatchES2015 = str1.match(/Hello/g);
// console.log(regexMatchES2015);

// // 46. String.prototype.search (ES2015)
// const searchResult = str1.search(/Hello/);
// console.log(searchResult);

// // 47. String.prototype.startsWith (ES2015)
// const startsWithHelloES2015 = str1.startsWith('Hello');
// console.log(startsWithHelloES2015);

// // 48. String.prototype.endsWith (ES2015)
// const endsWithWorldES2015 = str1.endsWith('World!');
// console.log(endsWithWorldES2015);

// // 49. String.prototype.replaceAll (ES2021)
// const replacedAllES2021 = 'hello world hello'.replaceAll('hello', 'hi');
// console.log(replacedAllES2021);

// // 50. String.prototype.padStart (ES2017)
// const paddedStartES2017 = '5'.padStart(4, '0'); // '0005'
// console.log(paddedStartES2017);

// // 51. String.prototype.padEnd (ES2017)
// const paddedEndES2017 = '5'.padEnd(4, '0'); // '5000'
// console.log(paddedEndES2017);

// // 52. String.prototype.trimStart (ES2019)
// const trimmedStartES2019 = '   Trim me!   '.trimStart();
// console.log(trimmedStartES2019);

// // 53. String.prototype.trimEnd (ES2019)
// const trimmedEndES2019 = '   Trim me!   '.trimEnd();
// console.log(trimmedEndES2019);

// // 54. String.prototype.matchAll (ES2020)
// const regexMatchAllES2020 = /a/g;
// const matchesES2020 = [...'abcabcabc'.matchAll(regexMatchAllES2020)];
// console.log(matchesES2020);

// // 55. String.prototype.at (ES2021)
// const characterAtES2021 = 'abc'.at(1);
// console.log(characterAtES2021);


// Interview Questions on JavaScript Strings

// // Question 1: How do you find the length of a string?
// const str = 'Hello, World!';
// const length = str.length;
// console.log(length); // Output: 13

// // Question 2: How do you access the first character of a string?
// const firstChar = str[0];
// console.log(firstChar); // Output: 'H'

// // Question 3: How do you concatenate two strings?
// const str1 = 'Hello, ';
// const str2 = 'World!';
// const concatenatedStr = str1 + str2;
// console.log(concatenatedStr); // Output: 'Hello, World!'

// // Question 4: How do you create a string using template literals?
// const name = 'Alice';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: 'Hello, Alice!'

// // Question 5: How do you replace a substring in a string?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const newSentence = sentence.replace('fox', 'cat');
// console.log(newSentence); // Output: 'The quick brown cat jumps over the lazy dog.'

// // Question 6: How do you check if a string contains a specific substring?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const containsFox = sentence.includes('fox');
// console.log(containsFox); // Output: true

// // Question 7: How do you convert a string to uppercase and lowercase?
// const str = 'JavaScript';
// const upperCaseStr = str.toUpperCase();
// const lowerCaseStr = str.toLowerCase();
// console.log(upperCaseStr); // Output: 'JAVASCRIPT'
// console.log(lowerCaseStr); // Output: 'javascript'

// // Question 8: How do you split a string into an array of substrings?
// const sentence = 'The quick brown fox';
// const words = sentence.split(' ');
// console.log(words); // Output: [ 'The', 'quick', 'brown', 'fox' ]

// // Question 9: How do you remove leading and trailing whitespace from a string?
// const whitespaceStr = '   Trim me!   ';
// const trimmedStr = whitespaceStr.trim();
// console.log(trimmedStr); // Output: 'Trim me!'

// // Question 10: How do you find the index of a specific substring in a string?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const indexOfFox = sentence.indexOf('fox');
// console.log(indexOfFox); // Output: 16

// // Question 11: How do you check if a string starts or ends with a specific substring?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const startsWithThe = sentence.startsWith('The');
// const endsWithDog = sentence.endsWith('dog.');
// console.log(startsWithThe); // Output: true
// console.log(endsWithDog); // Output: true

// // Question 12: How do you repeat a string multiple times?
// const str = 'abc';
// const repeatedStr = str.repeat(3);
// console.log(repeatedStr); // Output: 'abcabcabc'

// // Interview Questions on JavaScript Strings (Continued)

// // Question 13: How do you find the last index of a specific character in a string?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const lastIndexOfO = sentence.lastIndexOf('o');
// console.log(lastIndexOfO); // Output: 40

// // Question 14: How do you extract a substring from a string?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const substring = sentence.substring(10, 15);
// console.log(substring); // Output: 'brown'

// // Question 15: How do you check if a string is empty or contains only whitespace characters?
// const emptyStr = '';
// const whitespaceStr = '   ';
// const isNotEmpty = emptyStr.length !== 0;
// const isNotWhitespace = whitespaceStr.trim().length !== 0;
// console.log(isNotEmpty); // Output: false
// console.log(isNotWhitespace); // Output: false

// // Question 16: How do you compare two strings for equality?
// const str1 = 'apple';
// const str2 = 'apple';
// const areEqual = str1 === str2;
// console.log(areEqual); // Output: true

// // Question 17: How do you find the Unicode code point of a character in a string?
// const character = 'A';
// const codePoint = character.charCodeAt(0);
// console.log(codePoint); // Output: 65

// // Question 18: How do you convert a string to an array of characters?
// const str = 'Hello, World!';
// const charArray = Array.from(str);
// console.log(charArray); // Output: [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]

// // Question 19: How do you check if a string contains a specific character using includes?
// const str = 'Hello, World!';
// const includesComma = str.includes(',');
// console.log(includesComma); // Output: true

// // Question 20: How do you find the first occurrence of a character in a string using indexOf?
// const str = 'Hello, World!';
// const indexOfComma = str.indexOf(',');
// console.log(indexOfComma); // Output: 5

// // Question 21: How do you check if a string ends with a specific character using endsWith?
// const str = 'Hello, World!';
// const endsWithExclamation = str.endsWith('!');
// console.log(endsWithExclamation); // Output: true

// // Question 22: How do you check if a string starts with a specific character using startsWith?
// const str = 'Hello, World!';
// const startsWithHello = str.startsWith('Hello');
// console.log(startsWithHello); // Output: true

// // Question 23: How do you find all occurrences of a pattern in a string using match?
// const str = 'The quick brown fox jumps over the lazy dog.';
// const matches = str.match(/o/g);
// console.log(matches); // Output: [ 'o', 'o', 'o', 'o' ]

// // Question 24: How do you pad a string with leading zeros using padStart?
// const str = '42';
// const paddedStr = str.padStart(4, '0');
// console.log(paddedStr); // Output: '0042'

// // Question 25: How do you pad a string with trailing zeros using padEnd?
// const str = '42';
// const paddedStr = str.padEnd(4, '0');
// console.log(paddedStr); // Output: '4200'


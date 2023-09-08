// Example 1: push()
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Example 2: pop()
const fruitsPop = ["apple", "banana", "cherry"];
const removedFruitPop = fruitsPop.pop();
console.log(removedFruitPop); // Output: 'cherry'
console.log(fruitsPop); // Output: ['apple', 'banana']

// Example 3: shift()
const fruitsShift = ["apple", "banana", "cherry"];
const removedFruitShift = fruitsShift.shift();
console.log(removedFruitShift); // Output: 'apple'
console.log(fruitsShift); // Output: ['banana', 'cherry']

// Example 4: unshift()
const fruitsUnshift = ["banana", "cherry"];
fruitsUnshift.unshift("apple");
console.log(fruitsUnshift); // Output: ['apple', 'banana', 'cherry']

// Example 5: concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4]

// Example 6: slice()
const fruitsSlice = ["apple", "banana", "cherry"];
const subArray = fruitsSlice.slice(1, 3);
console.log(subArray); // Output: ['banana', 'cherry']

// Example 7: splice()
const fruitsSplice = ["apple", "banana", "cherry"];
fruitsSplice.splice(1, 1, "grape");
console.log(fruitsSplice); // Output: ['apple', 'grape', 'cherry']

// Example 8: forEach()
const numbersForEach = [1, 2, 3];
numbersForEach.forEach((number) => console.log(number));
// Output:
// 1
// 2
// 3

// Example 9: map()
const numbersMap = [1, 2, 3];
const doubled = numbersMap.map((number) => number * 2);
console.log(doubled); // Output: [2, 4, 6]

// Example 10: filter()
const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example 11: find()
const numbersFind = [1, 2, 3, 4, 5];
const firstEven = numbersFind.find((number) => number % 2 === 0);
console.log(firstEven); // Output: 2

// Example 12: reduce()
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Example 13: every()
const numbersEvery = [2, 4, 6, 8];
const allEven = numbersEvery.every((number) => number % 2 === 0);
console.log(allEven); // Output: true

// Example 14: some()
const numbersSome = [1, 3, 5, 7, 8];
const hasEven = numbersSome.some((number) => number % 2 === 0);
console.log(hasEven); // Output: true

// Example 15: includes()
const fruitsIncludes = ["apple", "banana", "cherry"];
const hasBanana = fruitsIncludes.includes("banana");
console.log(hasBanana); // Output: true

// Example 16: indexOf()
const fruitsIndexOf = ["apple", "banana", "cherry"];
const index = fruitsIndexOf.indexOf("cherry");
console.log(index); // Output: 2

// Example 17: findIndex()
const numbersFindIndex = [1, 2, 3, 4, 5];
const firstEvenIndex = numbersFindIndex.findIndex((number) => number % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// Example 18: sort()
const fruitsSort = ["banana", "apple", "cherry"];
fruitsSort.sort();
console.log(fruitsSort); // Output: ['apple', 'banana', 'cherry']

// Example 19: reverse()
const numbersReverse = [1, 2, 3, 4, 5];
numbersReverse.reverse();
console.log(numbersReverse); // Output: [5, 4, 3, 2, 1]

// Example 20: join()
const fruitsJoin = ["apple", "banana", "cherry"];
const fruitString = fruitsJoin.join(", ");
console.log(fruitString); // Output: 'apple, banana, cherry'

// Example 1: push()
// The push() method adds one or more elements to the end of an array.
// In this example, it adds the string 'cherry' to the fruits array.
// Example 2: pop()
// The pop() method removes the last element from an array and returns it.
// In this example, it removes 'cherry' from the fruitsPop array.
// Example 3: shift()
// The shift() method removes the first element from an array and returns it.
// In this example, it removes 'apple' from the fruitsShift array.
// Example 4: unshift()
// The unshift() method adds one or more elements to the beginning of an array.
// In this example, it adds 'apple' to the beginning of the fruitsUnshift array.
// Example 5: concat()
// The concat() method combines two or more arrays and returns a new array.
// In this example, it combines arr1 and arr2 into the combined array.
// Example 6: slice()
// The slice() method returns a shallow copy of a portion of an array.
// In this example, it extracts a portion of the fruitsSlice array from index 1 to 3 (excluding 3).
// Example 7: splice()
// The splice() method changes the contents of an array by removing, replacing, or adding elements.
// In this example, it removes one element at index 1 and replaces it with 'grape' in the fruitsSplice array.
// Example 8: forEach()
// The forEach() method executes a provided function once for each array element.
// In this example, it logs each number in the numbersForEach array to the console.
// Example 9: map()
// The map() method creates a new array with the results of calling a provided function on every element.
// In this example, it doubles each number in the numbersMap array.
// Example 10: filter()
// The filter() method creates a new array with all elements that pass the test provided by a function.
// In this example, it filters out even numbers from the numbersFilter array.
// Example 11: find()
// The find() method returns the first element in the array that satisfies a provided testing function.
// In this example, it finds the first even number in the numbersFind array.
// Example 12: reduce()
// The reduce() method applies a function against an accumulator and each element in the array to reduce it to a single value.
// In this example, it calculates the sum of all numbers in the numbersReduce array.
// Example 13: every()
// The every() method tests whether all elements in the array pass the provided function.
// In this example, it checks if all numbers in the numbersEvery array are even.
// Example 14: some()
// The some() method tests whether at least one element in the array passes the provided function.
// In this example, it checks if at least one number in the numbersSome array is even.
// Example 15: includes()
// The includes() method checks if an array includes a certain element, returning true or false.
// In this example, it checks if the string 'banana' is in the fruitsIncludes array.
// Example 16: indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array or -1 if it's not present.
// In this example, it finds the index of 'cherry' in the fruitsIndexOf array.
// Example 17: findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies a provided testing function or -1 if none is found.
// In this example, it finds the index of the first even number in the numbersFindIndex array.
// Example 18: sort()
// The sort() method sorts the elements of an array in place and returns the sorted array.
// In this example, it sorts the fruitsSort array alphabetically.
// Example 19: reverse()
// The reverse() method reverses the order of the elements in an array in place.
// In this example, it reverses the numbersReverse array.
// Example 20: join()
// The join() method joins all elements of an array into a string and returns the string.
// In this example, it joins the fruitsJoin array elements with a comma and space separator.
// Each example demonstrates one of these array methods and provides a practical use case for each.

// ----------------------------------------------------------------------------------------------------------------------------

// Interview Questions on JavaScript Arrays

// Question 1: What is an array in JavaScript?
// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// // Question 2: How do you access elements in an array?
// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits[0]); // Output: 'apple'
// console.log(fruits[1]); // Output: 'banana'
// console.log(fruits[2]); // Output: 'cherry'

// // Question 3: How do you add elements to the end of an array?
// const fruits = ['apple', 'banana'];
// fruits.push('cherry');
// console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// // Question 4: How do you remove elements from the end of an array?
// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.pop();
// console.log(removedFruit); // Output: 'cherry'
// console.log(fruits); // Output: ['apple', 'banana']

// // Question 5: How do you add elements to the beginning of an array?
// const fruits = ['banana', 'cherry'];
// fruits.unshift('apple');
// console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// // Question 6: How do you remove elements from the beginning of an array?
// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.shift();
// console.log(removedFruit); // Output: 'apple'
// console.log(fruits); // Output: ['banana', 'cherry']

// // Question 7: How do you find the index of an element in an array?
// const fruits = ['apple', 'banana', 'cherry'];
// const index = fruits.indexOf('banana');
// console.log(index); // Output: 1

// // Question 8: How do you add elements at a specific position in an array?
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 0, 'orange');
// console.log(fruits); // Output: ['apple', 'orange', 'banana', 'cherry']

// // Question 9: How do you remove elements from a specific position in an array?
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 1);
// console.log(fruits); // Output: ['apple', 'cherry']

// // Question 10: How do you copy an array?
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); // Output: [1, 2, 3]

// // Question 11: How do you check if an element exists in an array?
// const fruits = ['apple', 'banana', 'cherry'];
// const hasBanana = fruits.includes('banana');
// console.log(hasBanana); // Output: true

// // Question 12: How do you find the sum of all elements in an array?
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 15

// // Question 13: How do you filter elements in an array based on a condition?
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// // Question 14: How do you find the maximum element in an array?
// const numbers = [1, 3, 5, 2, 4];
// const max = Math.max(...numbers);
// console.log(max); // Output: 5

// // Question 15: How do you reverse an array?
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // Output: [5, 4, 3, 2, 1]

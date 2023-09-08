// // JavaScript Objects Cheat Sheet with CRUD Operations and More

// // 1. Creating Objects
// const obj = {};
// const person = {
//   name: 'John',
//   age: 30,
// };

// // 2. Accessing Properties
// const name = person.name;
// const age = person['age'];

// // 3. Adding and Modifying Properties
// person.city = 'New York';
// person.age = 31;

// // 4. Checking if a Property Exists
// if ('city' in person) {
//   // 'city' property exists
// }

// // 5. Deleting Properties
// delete person.city;

// // 6. Object Methods
// const keys = Object.keys(person);
// const values = Object.values(person);
// const entries = Object.entries(person);

// // 7. Destructuring Objects
// const { name: personName, age: personAge } = person;

// // 8. Object Methods
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
// };
// const sum = calculator.add(5, 3); // sum = 8

// // 9. Object Prototypes and Classes
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const john = new Person('John', 30);

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }
// const myCar = new Car('Toyota', 'Camry');

// // 10. Object Inheritance
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }
// const alice = new Student('Alice', 18, 'A');

// // 11. Object Spread and Rest Properties
// const copy = { ...person };
// const { name: personName, ...rest } = person;

// // 12. Object.freeze()
// Object.freeze(person);

// // 13. Object.seal()
// Object.seal(person);

// // 14. Object.assign()
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const merged = Object.assign({}, obj1, obj2);

// // 15. Property Value Shorthand
// const name = 'Alice';
// const age = 25;
// const person = { name, age };

// // 16. Computed Property Names
// const key = 'color';
// const car = {
//   [key]: 'blue',
// };

// // 17. Object Destructuring with Default Values
// const { name, age = 30 } = person;

// // 18. JSON.stringify() and JSON.parse()
// const person = { name: 'Alice', age: 25 };
// const jsonStr = JSON.stringify(person);
// const parsedObj = JSON.parse(jsonStr);

// // 19. Object Property Existence Checking
// const hasName = 'name' in person;
// const hasEmail = 'email' in person;

// // 20. Object Cloning
// const original = { a: 1, b: 2 };
// const clone = { ...original };

// // CRUD Operations on Objects

// // Create
// const users = [];
// function createUser(name, email) {
//   const user = { name, email };
//   users.push(user);
// }

// // Read
// function getUserByEmail(email) {
//   return users.find((user) => user.email === email);
// }

// // Update
// function updateUserEmail(name, newEmail) {
//   const user = users.find((user) => user.name === name);
//   if (user) {
//     user.email = newEmail;
//   }
// }

// // Delete
// function deleteUserByEmail(email) {
//   const index = users.findIndex((user) => user.email === email);
//   if (index !== -1) {
//     users.splice(index, 1);
//   }
// }

// // More Object Methods and Operations

// // 21. Object.keys() to Iterate Over Object Properties
// Object.keys(person).forEach((key) => {
//   console.log(key, person[key]);
// });

// // 22. Object.entries() to Iterate Over Key-Value Pairs
// Object.entries(person).forEach(([key, value]) => {
//   console.log(key, value);
// });

// // 23. Spread Operator for Merging Objects
// const objA = { a: 1 };
// const objB = { b: 2 };
// const mergedObj = { ...objA, ...objB };

// // 24. Rest Parameter in Function
// function mergeObjects(...objects) {
//   return objects.reduce((result, obj) => ({ ...result, ...obj }), {});
// }
// const mergedO = mergeObjects(objA, objB);

// // 25. Object Destructuring in Function Parameters
// function printPersonDetails({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
// const personDetails = { name: 'Alice', age: 25 };
// printPersonDetails(personDetails);



// // Interview Questions on JavaScript Objects

// // Question 1: What is an object in JavaScript?
// const emptyObj = {};
// console.log(emptyObj); // Output: {}

// // Question 2: How do you create an empty object in JavaScript?
// const emptyObj = {};
// console.log(emptyObj); // Output: {}

// // Question 3: How can you access the properties of an object in JavaScript?
// const person = {
//   name: 'John',
//   age: 30,
// };

// console.log(person.name); // Output: 'John'
// console.log(person['age']); // Output: 30

// // Question 4: How do you add a new property to an existing object?
// const person = {
//   name: 'John',
// };

// person.age = 30;
// console.log(person); // Output: { name: 'John', age: 30 }

// // Question 5: How can you check if a property exists in an object?
// const person = {
//   name: 'John',
// };

// console.log('name' in person); // Output: true
// console.log('age' in person); // Output: false

// // Question 6: How do you delete a property from an object?
// const person = {
//   name: 'John',
//   age: 30,
// };

// delete person.age;
// console.log(person); // Output: { name: 'John' }

// // Question 7: What is object destructuring in JavaScript?
// const person = {
//   name: 'Alice',
//   age: 25,
// };

// const { name, age } = person;
// console.log(name); // Output: 'Alice'
// console.log(age); // Output: 25

// // Question 8: How do you create a shallow copy of an object in JavaScript?
// const original = { a: 1, b: 2 };
// const copy = { ...original };
// console.log(copy); // Output: { a: 1, b: 2 }

// // Question 9: What is the difference between `Object.freeze()` and `Object.seal()`?
// // `Object.freeze()` makes an object immutable, preventing the addition, modification, or deletion of properties.
// // `Object.seal()` allows property values to be changed but prevents adding or deleting properties.

// // Question 10: How do you merge two objects in JavaScript?
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // Output: { a: 1, b: 2 }

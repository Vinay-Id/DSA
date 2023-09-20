const products = [
  ["flour", "eggs", "yeast", "sugar"],
  ["soda", "water", "juice"],
];
products.push(["chickpeas", "kidney beans", "pinto beans"]);
console.table(products);
console.log(products[0][1]);

//example
var arr1 = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < i; j++) {
    const temp = arr1[i][j];

    arr1[i][j] = arr1[j][i];

    arr1[j][i] = temp;
  }
}

console.log(arr1);

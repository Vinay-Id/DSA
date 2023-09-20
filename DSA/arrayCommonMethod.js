const products = ["flour", "yeast", "eggs"];

console.log(products.toString());
console.log(products.join(","));

let product = products.pop();
console.log(product);

delete products[0];
console.log(products);
const arr1 = [1, 2, 3, 4, 5];


var evenCount = 0;
var oddCount = 0;
for (vals of arr1) {
  if (vals % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}

console.log(oddCount);

console.log(evenCount);

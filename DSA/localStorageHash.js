class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }
  calculateHash(value) {
    var sum = 0;

    for (var i = 0; i < value.size; i++) {
      var charCode = value.charCodeAt(i);
      sum += charCode;
    }

    return sum % this.size;
  }

  add(key, value) {
    var hash = this.calculateHash(key);

    if (this.values[hash] === undefined) {
      this.values[hash] = value;
    } else {
      var iters = 0;
      while (this.values[hash] !== undefined && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }
      if (iters > this.size) {
        throw "IndexOutOfRange";
      } else {
        this.values[hash] = value;
      }
    }
  }
  getItem(key) {
    var hash = this.calculateHash(key);
    return this.values[hash];
  }
}

//eample
const map1 = new Map();

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 3, 5];
for (var i = 0; i < arr1.length; i++) {
  if (!map1.has(arr1[i])) {
    map1.set(arr1[i], arr1[i]);
  }
}
var isSubset = true;
var i = 0;
while (i < arr2.length && isSubset) {
  if (!map1.has(arr2[i])) {
    isSubset = false;
  }
  i++;
}
console.log(isSubset);

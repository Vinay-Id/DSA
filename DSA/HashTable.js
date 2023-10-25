class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    return value % this.size;
  }
  add(value) {
    var hash = this.calculateHash(value);

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
  contains(value) {
    var hash = this.calculateHash(value);

    if (this.values[hash] == value) {
      return true;
    } else {
      var iters = 0;
      while (this.values[hash] != value && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }
      if (this.values[hash] == value) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// example
const map1 = new Map();

var union = [];
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 2, 4, 6, 8, 10];
for (var i = 0; i < arr1.length; i++) {
  if (!map1.has(arr1[i])) {
    map1.set(arr1[i], arr1[i]);
    union.push(arr1[i]);
  }
}
for (var i = 0; i < arr2.length; i++) {
  if (!map1.has(arr2[i])) {
    map1.set(arr2[i], arr2[i]);
  }
}
console.log(map1);

var arr = [1, 2, 3, 3, 4, 4, 5];
var h = new HashTable(251);
var retArr = [];

for (var i = 0; i < arr.length; i++) {
  var v = arr[i];

  if (!h.contains(v)) {
    retArr.push(v);
    h.add(v);
  }
}

console.log(retArr);

var arr = [1, 2, 3, 3, 4, 4, 5];
var arr2 = [1, 6, 2, 7, 9];

var h = new HashTable(251);
var intercept = [];

for (var i = 0; i < arr.length; i++) {
  var v = arr[i];
  if (!h.contains(v)) {
    h.add(v);
  }
}

for (var i = 0; i < arr2.length; i++) {
  var v = arr2[i];
  if (h.contains(v)) {
    intercept.push(v);
  }
}

console.log(intercept);

// he two sum problem is a classic algorithms problem
const map1 = new Map();
const arr = [1, 2, 2, 7];
var target = 9;
var solution = [];
var i = 0;
var foundPair = false;
while (i < arr.length) {
  map1.set(arr[i], i);
  i++;
}
i = 0;
while (i < arr.length && !foundPair) {
  var compliment = target - arr[i];
  if (map1.has(compliment)) {
    if (i != map1.get(compliment)) {
      solution.push(arr[i]);
      solution.push(arr[map1.get(compliment)]);
      foundPair = true;
    }
  }
  i++;
}

console.log(solution);

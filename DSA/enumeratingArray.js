const products = ["flour","yeast","eggs"];
const nums = [1,2,3,4];

products.forEach(printProducts);
const newNums = nums.map(addOne);

const filteredNums = nums.filter(overThree);

let sumNums = nums.reduce(sumAll);

console.log(newNums);
console.log(filteredNums);
console.log(sumNums);

function printProducts(value,index,array){
	console.log(value);
}

function addOne(value, index, array){
	return value + 1;
}

function overThree(value, index, array){
    return value > 3;
}

function sumAll(total,value, index,array){
    return total + value;
}
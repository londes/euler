let snUtil = require('../utils/non_scientific_notation');

let number = 100;
let factorialNums = [];

// generate an array of numbers based on the starting value
for (i=number;i>0;i--){
    factorialNums.push(i);
}

console.log(factorialNums);

// reduce the array of numbers to the product of all numbers in the array
let factorialProduct = factorialNums.reduce(
    (previousValue, currentValue) => previousValue * currentValue
);

factorialProduct = snUtil.toFixed(factorialProduct);
console.log("product: " + factorialProduct);

// take the product of all numbers in array, and convert to array of the digits of that product
let factorialDigits = Array.from(factorialProduct.toString()).map(Number);

console.log("factorial digits: " + factorialDigits);

// sum all of the digits in the product
let factorialDigitSum = factorialDigits.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);

console.log("sum: " + factorialDigitSum);
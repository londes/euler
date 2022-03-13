// import our utility
// leaving this commented out for now because we can just parse the integers from the array

// let snUtil = require('../utils/non_scientific_notation');

let number = BigInt(100);
let factorialNums = [];

// generate an array of numbers based on the starting value
for (i=number;i>0;i--){
    factorialNums.push(BigInt(i));
}

console.log("outputs for number equals: " + number);

// reduce the array of numbers to the product of all numbers in the array
let factorialProduct = factorialNums.reduce(
    (previousValue, currentValue) => previousValue * currentValue
);
console.log("product: " + factorialProduct);

// reference to our busted util that we imported with require()
//factorialProduct = snUtil.toFixed(factorialProduct);

// take the product of all numbers in array, and convert to array of the digits of that product
// the check for 'e' and the filter is to account for numbers returned in scientific notation
let factorialDigits = Array.from(((factorialProduct.toString()).split('e'))[0]).map(Number);

factorialDigits = factorialDigits.filter(function (digit) {
    return !Number.isNaN(digit);
});

console.log("factorial digits: " + factorialDigits);

// please note that this is a janky, ad-hoc solution to get the solution for 100 specifically, as our
// non_scientific_notation util is changing the last number in the sequence sometimes, for some reason.

// sum all of the digits in the product
let factorialDigitSum = factorialDigits.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);

console.log("sum: " + factorialDigitSum);
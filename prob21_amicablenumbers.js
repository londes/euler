// for some starting number
let n = 100;
console.log('our starting number is: ' + n);

// determine all of the numbers that are less than the starting number
// and store them

let digitsArray = [];
for (let i = 1; i<n; i++) {
    digitsArray.push(i);
}
console.log('the digits less than ' + n + ' are ' + digitsArray);

// function that accepts a number, determines all of its factors,
// then sums all of the factors and returns that sum
function getFactorsSum (n) {
    console.log('we are in getFactorsSum for ' + n);
    let factorsArray = [];
    for (let i = 1; i <= n; i++) {
        if(n % i == 0) {
            console.log('we pushed to factorsArray and the factor of ' + n + ' is ' + i);
            factorsArray.push(i);
        }
    }
    if (factorsArray.length == 1) {
        return 1;
    }
    console.log('the sum of the factors for ' + n + ' are ' + factorsArray.reduce((a, b) => a + b));
    return factorsArray.reduce((a, b) => a + b);
    
}

// store them in an array of objects
let factorSumsDict = []
digitsArray.forEach(value => {
    console.log('we are in the forEach and value is: ' + value);
    factorSumsDict.push({value: getFactorsSum(value)})
})

// for each key, check for a matching value

// if they match, push to an array

// sum the numbers
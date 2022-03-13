// for some starting number
let n = 100;
console.log('our starting number is: ' + n);

// determine all of the factors for each number that are less than that number
let digitsArray = [];

for (let i = 1; i<n; i++) {
    digitsArray.push(i);
}

console.log('the digits less than ' + n + ' are ' + digitsArray);

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
    return factorsArray.reduce(a, b => a + b);
    
}

let factorSumsDict = []
digitsArray.forEach(value => {
    factorSumsDict.push({value: getFactorsSum(value)})
})

// store them in a dictionary

// for each key, check for a matching value

// if they match, push to an array

// sum the numbers
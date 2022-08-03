// for some starting number
let n = 10000;
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
        if((n % i == 0) && (n != i)) {
            console.log('we pushed to factorsArray and the factor of ' + n + ' is ' + i);
            factorsArray.push(i);
        }
    }
    if (n == 1) {
        return 1;
    }
    console.log('the sum of the factors for ' + n + ' is ' + factorsArray.reduce((a, b) => a + b));
    return factorsArray.reduce((a, b) => a + b);
    
}

// store them in an array
let factorSums = [];
digitsArray.forEach(digit => {
    factorSums.push(getFactorsSum(digit));
})

// for each key, check for a matching value and push those
// values to an array. we have to use a nested loop to ensure
// both the key and values match relative to each digit and factor sum
// a lot of logic here -- main check is that the key matches the opposite value, and vice versa.
// then we're checking to not push 1, or numbers where the sum is the same as the starting value.
// we also make sure that 
let matchingAmicables = [];
for (let a = 0; a < factorSums.length; a++) {
    for (let b = a; b < factorSums.length; b++) {
        if((a+1 == factorSums[b] && b+1 == factorSums[a]) && (!matchingAmicables.includes(a+1) 
        || !matchingAmicables.includes(b+1)) 
        && (b+1 != 1) 
        && (a+1 != factorSums[a])) {
            matchingAmicables.push(a+1);
            matchingAmicables.push(b+1);
        }
    }
};

console.log('matching amicables values: ' + matchingAmicables);

console.log('the sum of all the amicable numbers under ' + n + ' are ' + matchingAmicables.reduce((a, b) => a + b));


// sum the numbers
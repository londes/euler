// gonna push this one because default output of decimals is only ~18 digits
// tired of dealing with large number strings to solve these


// set fraction values
let numerator = 1;
let denominator = 2;

let currentLongestDecimal = 0;
let testingDecimal = 0;
// get unique values in quotient

for (i=denominator; i<1000; i++){
    quotient = numerator / i;
    let testingDecimal = quotient.toString().split('0.')[1]
    console.log (testingDecimal)
}

// compare unique value length to existing highest unique value


// store in an object, to have a reference to the number? or could
// this just be in the for loop?



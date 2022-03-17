// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

// input digits
let permutationDigits = [0,1,2,3];

// generate permutations, sorted
let permutationsArray = generatePermutations(permutationDigits);
console.log(permutationsArray);

// output of sums
console.log(permutationsArray.reduce((a, b) => a + b ));

// accepts an array of digits, determines all permutations
function generatePermutations(permutationDigits) {
    let perms = [];

    // wondering if doing int access from lastt to first
    // and pivoting based on each permutation k! values
    // position in the array
    return [];
}


// function getCombinedInteger accepts an array of digits,
// returns them combined into one digit
function getCombinedInteger (digitsArray) {
    let sum = 0;
    digitsArray.forEach((digit, index, self) => {
        sum += digit * Math.pow(10, self.length-index-1); 
    });
    return sum;
}

console.log(getCombinedInteger(permutationDigits));

/*

x amount of digits
assume it is ascending order

iteration = 1
start with highest, push, we know that will always be the last digit in the first value 1! = 1
second, third, 4th highest, push, that is the lowest value

iteration = 2
already pushed as highest for that variation, now there are two values, swap last two 
to represent two possible combinations 2! = 2

iteration = 3




what are the permutations in order of 0,1,2,3

0123
0132
0213
0231
0312
0321

1023
1032
1203
1230
1302
1320

2013
2031
2103
2130
2301
2310

3012
3021
3102
3120
3201
3210

*/
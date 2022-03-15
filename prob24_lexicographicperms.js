// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

// input digits
let permutationDigits = [0,1,2,3];

// assume our starting array is the smallest value, and
// that integers are listed in ascending order

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

*/
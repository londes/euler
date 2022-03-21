// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

// input digits
let permutationDigits = [0,1,2];

console.log('the first value in perms is ');
console.log('our output is ' + generatePermutations(permutationDigits));

// accepts an array of digits, determines all permutations
function generatePermutations(inputArr) {
    let perms = [];

    const permute = (arr, m = [] ) => {
        if (arr.length === 0){
            perms.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }
    // wondering if doing int access from lastt to first
    // and pivoting based on each permutation k! values
    // position in the array
    permute(inputArr)
    return perms
}


// function getCombinedInteger accepts an array of digits,
// returns them combined into one digit
function getCombinedInteger (digitsArray) {
    let sum = 0;
    digitsArray.forEach((digit, index, self) => {
        sum += digit * Math.pow(10, self.length-index-1); 
    });
    return sum
}
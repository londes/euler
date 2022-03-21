// generate fibonacci sequence
let current = 0;
let next = 1;

let fibNums = [];

for (i=0; i < 10000; i++) {
    temp = next;
    fibNums[i] = current + next;
    next += current;
    current = temp;
}

oneThousandDigitsValue = fibNums.forEach((fibNum) => {
    if (Math.ceil(Math.log10(fibNum + 1)) > 999) {
        console.log(BigInt(fibNum) + ' is more than 1k in length')
    } else {
        console.log(BigInt(fibNum) + ' is less than 1k in length')
    }
}) 

console.log(BigInt(fibNums[999]));

// check each term for length

// once term is 1000 in length, return that number


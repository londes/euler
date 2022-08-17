// values, and values array

let startingValue = 200
let remainingValue = 200

let valuesArray = [1, 2, 5, 10, 20, 50, 100, 200]

// values object

let currentDivisor = valuesArray.pop();

function findCoinSums () {
    while (remainingValue > 0) {
        if (remainingValue % currentDivisor == 0)
        remainingValue = startingValue - currentDivisor
    }
}

// check for remainder, iterate thru list

// push object if permutation doesn't exist
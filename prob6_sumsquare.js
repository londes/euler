let getSumOfSquares = function (limit) {
  let total = 0;
  for (i=1; i<=limit; i++) {
    total += Math.pow(i,2);
  }
  return total;
}

let getSquareOfSums = function (max) {
  let sum = 0;
  for (i=1; i<=max; i++) {
    sum += i;
  }
  let squaredSum = Math.pow(sum, 2);
  return squaredSum;
}

let answer = getSquareOfSums(100)-getSumOfSquares(100);

console.log(answer);

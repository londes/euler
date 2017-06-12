let isDivisibleByRange = function (number, start, end) {
  for (i=end; i>=start; i--) {
    if (number % i !== 0) {
      return false;
    }
  }
  return true;
}

let getValue = function () {
  let solution = 20;
  while (!isDivisibleByRange(solution, 1, 20)) {
    solution += 20;
  }
  return solution;
}

console.log(getValue());

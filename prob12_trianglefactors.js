let triangleNum = 1;
let increment = 1;

while (true) {
  let totalNumDivisors = numDivisors(triangleNum);
  console.log("triangle num " + triangleNum);
  console.log("num divisors " + totalNumDivisors);
  if (totalNumDivisors>=500) {
    console.log(triangleNum);
    break;
  }
  increment++;
  triangleNum = triangleNum + increment;
}

function numDivisors(num) {
  let currentLowDivisor = 2;
  let currentHighDivisor = num;
  let totalDivisors = 2;

  while (currentLowDivisor <= currentHighDivisor) {
    if (num % currentLowDivisor === 0) {
      currentHighDivisor = num / currentLowDivisor;
      if (currentLowDivisor === currentHighDivisor){
        totalDivisors++;
        return totalDivisors;
      }
      totalDivisors+=2;
    }
    currentLowDivisor++;
  }
  return totalDivisors;
}

let isPrime = function (inputValue) {
  let divideChecker = 0;
  for (i=1; i<=inputValue; i++) {
      if (i!=1 && i!=inputValue){
        if (inputValue%i===0) {
          divideChecker++;
        }
        else {
        }
      }
  }
  if (divideChecker > 0) {
    return false;
  }
  return true;
};

let generatePrimes = function (findPrimeValues) {
  let primeFactors = [];
  for (z=2; z<=Math.sqrt(findPrimeValues)+1; z++) {
    if (isPrime(z)==true){
      console.log(z);
      primeFactors.push(z);
    }
    else {}
  }
  return primeFactors;
};

let getPrimeFactors = function (testValue, containedPrimesArray) {
  let primeFactors = [];
  for (i=0; i<containedPrimesArray.length; i++) {
    if (testValue%containedPrimesArray[i]===0) {
      primeFactors.push(containedPrimesArray[i]);
    }
  }
  return primeFactors.pop();
}

console.log(getPrimeFactors(600851475143, generatePrimes(600851475143)));
//console.log(generatePrimes(600851475143));

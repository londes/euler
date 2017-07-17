let primes = [];

let isPrime = function (inputValue) {
  for (i=2; i<inputValue; i++) {
    if (inputValue%i===0) {
      return false;
    }
  }
  return true;
};

for (j=2; j<999999999; j++) {
  if (primes.length > 10002) {
    break;
  }
  if (isPrime(j)) {
    primes.push(j);
  }
  else {}
};

console.log(primes);
console.log(primes.length);
console.log(primes[10000]);

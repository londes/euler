let primesList = {};
let len = 2000000;

for (let i=0; i <= len; i++) {
  primesList[i]=true;
}
primesList[0]=false;
primesList[1]=false;

for (let i=0; i <= Math.sqrt(len); i++) {
  if (primesList[i]) {
    for (let j=i*i; j<=len; j=j+i) {
      primesList[j] = false;
    }
  }
}

let total=0;
for (i in primesList) {
  if (primesList[i]) {
    total+=parseInt(i);
  }
}

console.log(total);

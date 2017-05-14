let sum = 0;
let rootNum = 0;
let nextNum = 1;

while (rootNum < 4000000) {

  if (rootNum % 2 === 0){
    sum += rootNum;
  }

  let newNum = rootNum + nextNum;
  rootNum = nextNum;
  nextNum = newNum;

}

console.log(sum);

var divisible = [];

for (var i=0; i<1000; i++) {
  if ( i%3 === 0 || i%5 === 0) {
    divisible.push(i);
  }
}

var sum = divisible.reduce(add, 0);

function add(a,b) {
  return a + b;
}

console.log(sum);

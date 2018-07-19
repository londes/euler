// processes the solution using (n+m)!/((n!)(m!))
function calcPaths (numRows, numCols) {
  return getFactorialProduct(numRows + numCols) / ( getFactorialProduct(numRows) * getFactorialProduct(numCols) )
}

// builds array of descending numbers from num to 1, then processes using reduce to get product, simulating k!
function getFactorialProduct (num) {
  let numsDescending = []
  for (i=num; i--; i>0) {
    numsDescending.push(i+1);
  }
  console.log('descending nums: ' + numsDescending);
  factorialProduct = numsDescending.reduce(function(product, value) {
    return product * value;
  })
  console.log('product: ' + factorialProduct);
  return factorialProduct;
}

console.log(calcPaths(2,2));
console.log(calcPaths(20,20));

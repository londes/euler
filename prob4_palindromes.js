let isPalindrome = function (testNumber) {
  let testString = testNumber.toString();
  let reverseTest = testString.split("").reverse().join("");
  return (testString === reverseTest);
}

let getThreeDigitProducts = function () {
  let products = [];
  for (let i=999; i>600; i--) {
    for (let j=999; j>600; j--) {
      if (isPalindrome(i*j)){
        products.push(i*j);
      }
    }
  }
  sortThreeDigitProducts(products);
  return products;
}

let sortThreeDigitProducts = function (productsArray) {
  return productsArray.sort(sortNumbers);
}

let sortNumbers = function (a, b) {
  return a - b;
}

// console.log(isPalindrome(9009));
// console.log(isPalindrome(9049));
// console.log(isPalindrome(9010109));
// console.log(sortThreeDigitProducts([12,16,99,4,36]));

console.log(getThreeDigitProducts().pop());

let expTotal = Math.pow(2,1000);

Number.prototype.getMagnitude= function(){
    var data= String(this).split(/[eE]/);
    if(data.length== 1) return data[0];

    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;
    return mag;
  }

let mag = expTotal.getMagnitude();
let entireNum = generateNum(expTotal, mag);

function generateNum (num, magnitude) {
  let numDigits = [];
  let mod = 10;
  for (i=0;i<magnitude;i++) {
    let modValue = num%mod - num%(mod/10);
    console.log("modval: " + modValue);
    console.log("mod: " +mod)
    let rootNum = modValue.toString().charAt(0);
    numDigits.push(rootNum);
    mod=mod*10;
  }
  let solution = numDigits.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return solution;
}

// expTotal.getMagnitude();
console.log(expTotal);
console.log(mag);
console.log(entireNum);

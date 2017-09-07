let highestLength=1;

for (start = 999999; start >1; start--) {
  let length = 1;
  let current = start;
  while (current > 0) {
    if (current%2===0){
      current = current/2;
      length;
    }
    else if (current===1) {
      length++;
      break;
    }
    else {
      current = current*3 + 1;
      length++;
    }
  }
  if (length > highestLength) {
    highestLength=length;
    console.log('number: '+start);
    console.log('length of chain: '+highestLength);
  }
}

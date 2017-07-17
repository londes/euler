function problem9 () {
  for (a=1; a<1000; a++){
    for (b=1; b<1000; b++){
      for (c=1; c<1000; c++){
        if ((a+b+c === 1000) && (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2))) {
          return a*b*c;
        }
      }
    }
  }
}

console.log(problem9());

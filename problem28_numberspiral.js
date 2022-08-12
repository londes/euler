// generate number spiral 
let spiralValues = []

for (let i = 1; i <= 1001*1001; i++)
    spiralValues.push(i);

// array to store corner values that we find in spiralValues
let cornerValues = []

// we have to keep track of the distance from each corner to the next corner to collect
// 4 corners, and where we are in the array (in this case, the location of the
// last corner we pushed)
let lengthToCorner = 2;
let cornerLocation = 2;

// the only reason we need to track the # of values checked is to not increment
// cornerLocation for the first value. Could probably clean this up
let valuesChecked = 0

// push the '1' value in spiralValues manually to get things going. see above, this 
// could likely be done better
cornerValues.push(spiralValues[0])


// function: pushCorners
// accepts: void
// returns: void (builds cornerValues array containing the values at all identified
// corners in the spiral)
function pushCorners () {    
    cornersPushed = 0;
    while (cornersPushed < 4) {

        if (valuesChecked > 0)
            cornerLocation += lengthToCorner;

        cornerValues.push(spiralValues[cornerLocation])
        cornersPushed++;
        valuesChecked++;
    }
    lengthToCorner += 2;

    // exit our recursive funciton if we reach the last value (last corner) in the 
    // spiralValues array
    if (cornerLocation < spiralValues.length-1)
        pushCorners()
}

// kick off our recursive algorithm for the first time
pushCorners(lengthToCorner, cornerLocation)

// add all corner values from grid (spiral) together
let sum = cornerValues.reduce((a,b) => a+b)

// output sum of corners
console.log(sum)





// generate number spiral (figure out how to make an array of 1001 x 1001 grid )

let spiralValues = []
let cornerValues = []

for (let i = 1; i <= 25; i++)
{
    spiralValues.push(i);
}

let lengthToCorner = 2;
let cornerLocation = 2;

let valuesChecked = 0;

cornerValues.push(spiralValues[0])

function pushCorners (lengthToCorner, cornerLocation) {    
    cornersPushed = 0;
    while (cornersPushed < 4) {
        cornerValues.push(spiralValues[cornerLocation])
        cornerLocation += lengthToCorner;
        cornersPushed++;
        valuesChecked++;
    }
    lengthToCorner += 2;

    if (valuesChecked < spiralValues.length-1) {
        console.log ('we\'re about to hit pushCorners and ltc is: ' + lengthToCorner) 
        pushCorners(lengthToCorner, cornerLocation)
    }
}

pushCorners(lengthToCorner, cornerLocation)
console.log(cornerValues)
    // push first value
    // increment lengthToCorner by 2
    // push each value that is lengthToCorner away until we have 4 (if we have 4, reset cornersPushed)
    // increment lengthToCorner by 2

//// from '1' starting point, grab every 2nd value 4x, 4th value 4x, 6th value 4x, 8th value 4x, etc
//// for the length of the array (assumes array is correct size)




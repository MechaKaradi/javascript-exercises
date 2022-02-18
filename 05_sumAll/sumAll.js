const sumAll = function(a,b) {
    
    //Check for whether it is a number. Check for if it is greater than 0
    if (!(typeof(a) == 'number')) { return "ERROR";}
    if (a<0) {return "ERROR";}
    if (!(typeof(b) == 'number')) { return "ERROR";}
    if (b<0) {return "ERROR";}

    //Order correctly for low and high

    let A = Math.min(a,b);
    let B = Math.max(a,b);

    // Make sum 
    
    let sum = 0;
    for (i=A; i<=B; i++) {
        sum+=i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

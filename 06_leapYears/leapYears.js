const leapYears = function(year) {
    //return false;
    if (isNaN(year)) {return "ERROR";}

    if (year%4 != 0) {return false;} //continues if true  
    
    if (year%100 == 0) {
        if (year%400 == 0) {
            return true;
        } else {return false;}
    } else {return true;}
}

// Do not edit below this line
module.exports = leapYears;

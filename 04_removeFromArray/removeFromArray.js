const removeFromArray = function(arrayInput,) {
    //import array and check that it is an array
    array = Array.from(arrayInput);
    if (!Array.isArray(array)) { return "Error. not an array"} 
    
    //Turn
     for (i=1; i < arguments.length; i++) {
        
        if (!array.includes(arguments[i])) {continue;}
        removeIndex = array.indexOf(arguments[i]);
        array.splice(removeIndex,1);
     }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

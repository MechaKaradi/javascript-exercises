const reverseString = function(string) {
    let text = string;
    let count = text.length;
    let reversedString = "";
    while (count > 0) {
        count--
        reversedString = reversedString + text[count];        
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

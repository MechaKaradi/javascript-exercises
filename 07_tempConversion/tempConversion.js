const ftoc = function(number) {
  if (isNaN(number)) {return "ERROR"}

  temprature = (number -32)*5/9;

  return Math.round(temprature*10)/10;

};

const ctof = function(number) {
  if (isNaN(number)) {return "ERROR"}
  temprature = (number*9/5)+32;

  return Math.round(temprature*10)/10;
 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

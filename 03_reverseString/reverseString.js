const reverseString = function(str) {

  let splitString = str.split("");

  let reverseArr = splitString.reverse();

  let reverseStr = reverseArr.join("");
  return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

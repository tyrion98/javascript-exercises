const removeFromArray = function(arr, removeElementOne, removeElementTwo = "",
                        removeElementThree = "", removeElementFour = "") {


  // find index of removeElement
  let removeElement = function(arr, value) {

    return arr.filter(function(element){
      return element !== value;
    });
  }


  // remove it from the array
  arr = removeElement(arr, removeElementOne);
  arr = removeElement(arr, removeElementTwo);
  arr = removeElement(arr, removeElementThree);
  arr = removeElement(arr, removeElementFour);
  console.log(arr);
  console.log(typeof removeElementFour);

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

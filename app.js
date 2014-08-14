
var hexInput = "18 3C 7E 7E 18 18 18 18";
var changeHexInputToArray = hexInput.split(" ");
console.log(changeHexInputToArray);
for (i = 0; i < changeHexInputToArray.length; i++) {

  var hexToDecimal = parseInt(changeHexInputToArray[i], 16);
  var decimalToBinary = hexToDecimal.toString(2);
  // console.log(decimalToBinary);

  //changes string 11000 to array [ '1', '1', '0', '0', '0' ]
  var binaryToIndividualElements = decimalToBinary.split("");
  console.log(binaryToIndividualElements);
  var numberOfZerosToConcat = 8 - decimalToBinary.length;
  console.log(numberOfZerosToConcat);

  for (j = 0; j < numberOfZerosToConcat; j++) {
    binaryToIndividualElements.unshift('0');
  };
  console.log(binaryToIndividualElements);
};

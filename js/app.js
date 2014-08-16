var hexInput = document.getElementById("hexInputBox");
var button = document.getElementById("clickToConvertValues");

button.onclick = function(e) {
  e.preventDefault();
  //'trim' eliminates spaces in input
  var changeHexInputToArray = hexInput.value.trim().split(" ");
    
  console.log(changeHexInputToArray);

  // var hexInput = "18 3C 7E 7E 18 18 18 18";
  for (i = 0; i < changeHexInputToArray.length; i++) {

    var hexToDecimal = parseInt(changeHexInputToArray[i], 16);
    var decimalToBinary = hexToDecimal.toString(2);
    // console.log(decimalToBinary);

    //changes string 11000 to array [ '1', '1', '0', '0', '0' ]
    var binaryToIndividualElements = decimalToBinary.split("");
    // console.log(binaryToIndividualElements);

    //change "1" to "x"
    for (k = 0; k < binaryToIndividualElements.length; k++) {
      if (binaryToIndividualElements[k] > 0) {
        binaryToIndividualElements.splice(k, 1, 'x');
      };
    };

    var numberOfZerosToConcat = 8 - decimalToBinary.length;
    // console.log(numberOfZerosToConcat);

    for (j = 0; j < numberOfZerosToConcat; j++) {
      binaryToIndividualElements.unshift('0');
    };
    console.log(binaryToIndividualElements);
  };
}

// //Example in Class
// (function() {
//   //initialization stuff
//   var maxLength = 8;
//   var inputString = "18 3C 7E 7E 18 18 18 18";

//   function processInputString(inputString) {
//     var outputArray = [];
//     var slitHexArray = inputString.split(" ");
//     // console.log(splitHexArray); //check if splits string
//     for (var i = 0; i < splitHexArray.length; i++) {
//       var currentValue = splitHexArray[i];
//       var convertedValue = parseInt(currentValue, 16).toString(2);
//       var outputPaddedValue = "";
//       var paddingLength = maxLength - convertedValue.length;
//       var tempPadding = "";

//       for (var j = 0; j < paddingLength; j++) {
//         tempPadding += "0";
//       };

//       outputPaddedValue = tempPadding + convertedValue;
//       // console.log(outputPaddedValue);

//       //"g" means global and will replace for all values, not just first one
//       outputPaddedValue = outputPaddedValue.replace("1", "X", "g").replace("0", " ", "g" );

//       outputArray.push(outputPaddedValue);
//     };

//     return outputArray;

//   };

//   function displayElements(elementArray) {
//     for (var i = 0; i < elementArray.length; i++) {
//       var currentBinaryValue = elementArray[i];
//       var containerElement = document.getElementById('container');
//       var binaryRowElement = document.createElement('div');

//       binaryRowElement.innerHTML = currentBinaryValue;

//       containerElement.appendChild(binaryRowElement);

//     };
//   };

//   var outputArray = processInputString(inputString);
//   // console.log(outputArray);
//   displayElements(outputArray);

//   })();
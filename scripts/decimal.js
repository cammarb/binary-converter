// DECIMAL TO BINARY
function convertToBinary() {
  var binaryArrayBackwards = [];
  var decimal = document.getElementById("decimalToBinary").value;
  while (decimal != 0) {
    if (decimal % 2 == 0) {
      binaryArrayBackwards.push(0);
      decimal = Math.floor(decimal / 2);
    } else {
      binaryArrayBackwards.push(1);
      decimal = Math.floor(decimal / 2);
    }
  }
  console.log(reoderArray(binaryArrayBackwards));
  document.getElementById("binary").innerHTML = reoderArray(
    binaryArrayBackwards
  );
  var binaryContainer = document.getElementById("binary_container");
  binaryContainer.style.display = "block";
}

// BINARY TO DECIMAL
function convertToDecimal() {
  let decimalArray = [];
  let sum = 0;
  var binary = document
    .getElementById("binaryToDecimal")
    .value.toString()
    .split("");
  decimalArray = binary.map((x) => parseInt(x));

  let lengthArray = decimalArray.length - 1;
  for (let i = 0; i < decimalArray.length; i++) {
    if (decimalArray[i] == 1) sum = sum + Math.pow(2, lengthArray);
    lengthArray--;
  }
  document.getElementById("decimal").innerHTML = sum;
  var binaryContainer = document.getElementById("decimal_container");
  binaryContainer.style.display = "block";
}

// TEXT TO BINARY
function convertTxtToBinary() {
  var txt = document.getElementById("txtToBinary").value;
  let binaryArray = [];
  for (let char = 0; char < txt.length; char++) {
    var ascii = txt.charCodeAt(char);
    let array = [0, 64, 32, 16, 8, 4, 2, 1];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      if (sum > ascii) {
        sum -= array[i];
        binaryArray.push(0);
      } else if (array[i] == 0) {
        binaryArray.push(0);
      } else binaryArray.push(1);
    }
  }
  console.log(binaryArray.join(""));
  document.getElementById("txtbinary").innerHTML = binaryArray.join("");
  var binaryContainer = document.getElementById("txtBinary_container");
  binaryContainer.style.display = "block";
}

// BINARY TO TEXT
function convertBinaryToTxt() {
  var binary = document.getElementById("binaryToTxt").value;
  let binaryArray = [];
  for (let char = 0; char < txt.length; char++) {
    var ascii = txt.charCodeAt(char);
    let array = [0, 64, 32, 16, 8, 4, 2, 1];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      if (sum > ascii) {
        sum -= array[i];
        binaryArray.push(0);
      } else if (array[i] == 0) {
        binaryArray.push(0);
      } else binaryArray.push(1);
    }
  }
  console.log(binaryArray.join(""));
  document.getElementById("txtbinary").innerHTML = binaryArray.join("");
  var binaryContainer = document.getElementById("txtBinary_container");
  binaryContainer.style.display = "block";
}

function acceptOnlyLetters(e) {
  var key = window.event ? e.keyCode : e.which;
  if ((key >= 32 && key <= 48) || (key >= 57 && key <= 126)) {
    return true;
  } else {
    alert("Please input alphabet characters only");
    return false;
  }
}

function acceptOnlyBinary(e) {
  var key = window.event ? e.keyCode : e.which;
  if (key == 48 || key == 49) return true;
  else {
    alert("Please input binary numbers only");
    return false;
  }
}

function multiplesOfEight() {
  let binary = document.getElementById("binaryToTxt").value;
  if (binary.length % 8 === 0) {
    return convertBinaryToTxt();
  } else {
    alert("Please input the correct lenght of binary numbers");
    return false;
  }
}

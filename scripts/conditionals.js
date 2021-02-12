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

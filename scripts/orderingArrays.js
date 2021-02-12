function reoderArray(array) {
  var finalArray = [];
  for (let i = 0; i < array.length; i++) {
    finalArray.push(array[array.length - i - 1]);
  }
  return finalArray.join("");
}

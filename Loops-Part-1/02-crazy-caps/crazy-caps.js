// YOUR CODE BELOW
function crazyCaps(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let newStr = str[i];
    if (i % 2 === 0) {
      result += newStr;
    } else {
      newStr = newStr.toUpperCase();
      result += newStr;
    }
  }
  return result;
}

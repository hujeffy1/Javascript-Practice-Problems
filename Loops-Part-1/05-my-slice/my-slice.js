// YOUR CODE BELOW
function mySlice(str, startIdx, endIdx) {
  if (startIdx === undefined) {
    return str;
  }
  if (endIdx === undefined) {
    endIdx = str.length;
  }
  let result = '';
  for (let i = startIdx; i < endIdx; i++) {
    let newStr = str[i];
    result += newStr;
  }
  return result;
}

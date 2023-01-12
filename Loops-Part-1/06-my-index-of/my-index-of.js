// YOUR CODE BELOW
function myIndexOf(str, target, idx) {
  if (idx === undefined) {
    idx = 0;
  }
  for (let i = idx; i <= str.length - target.length; i++) {
    let subStr = str.slice(i, i + target.length);
    if (subStr === target) {
      return i;
    }
  }
  return -1;
}

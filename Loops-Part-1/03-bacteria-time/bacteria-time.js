// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  if (targetNum < currentNum) {
    return 'targetNum must be larger than currentNum';
  }
  let result = 0;
  while (currentNum < targetNum) {
    currentNum *= 2;
    result += 20;
  }
  return result;
}

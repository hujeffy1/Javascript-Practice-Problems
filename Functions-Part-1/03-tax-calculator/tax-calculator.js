// YOUR CODE BELOW
function taxCalculator(num, state) {
  if (state === 'NY') {
    return num + num * 0.04;
  }
  if (state === 'NJ') {
    return num + num * 0.06625;
  }
}
